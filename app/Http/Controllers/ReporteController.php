<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Models\Renta;
use App\Models\Setting;
use App\Models\Vehiculo;
use Illuminate\Http\Request;
use App\Models\Mantenimiento;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use MongoDB\BSON\UTCDateTime;

class ReporteController extends Controller
{
    public function index()
    {
        // 1. Últimas 10 rentas realizadas
        $ultimasRentas = Renta::with(['vehiculo', 'cliente'])
            ->orderBy('created_at', 'desc')
            ->limit(10)
            ->get();

        // 2. Reparaciones agrupadas por mes con suma de costos
        $reparaciones = Mantenimiento::raw(function($collection) {
            return $collection->aggregate([
                [
                    '$group' => [
                        '_id' => [
                            'year' => ['$year' => '$fecha'],
                            'month' => ['$month' => '$fecha'],
                        ],
                        'total_costo' => ['$sum' => '$costo'],
                        'total_reparaciones' => ['$sum' => 1],
                    ],
                ],
                ['$sort' => ['_id.year' => -1, '_id.month' => -1]],
                ['$limit' => 6],
            ]);
        });

        // 3. Autos más rentados en los últimos 2 y 3 meses
        $fecha_hace_2_meses = new UTCDateTime( Carbon::now()->startOfMonth()->subMonths(2)->toDateTime() );

        $autosMasRentados2Meses = Renta::raw(function($collection) use ($fecha_hace_2_meses) {
            return $collection->aggregate([
                ['$match' => ['created_at' => ['$gte' => $fecha_hace_2_meses]]],
                ['$group' => [
                    '_id' => '$vehiculo_id',
                    'total_rentas' => ['$sum' => 1],
                ]],
                ['$sort' => ['total_rentas' => -1]],
                ['$limit' => 5],
            ]);
        });

        $autosMasRentados2MesesArray = $autosMasRentados2Meses->map(function($r){
            $vehiculo = Vehiculo::find($r->id);
            return [
                'id' => $r->id,
                'total_rentas' => $r->total_rentas,
                'vehiculo_id' => $r->vehiculo_id,
                'vehiculo' => $vehiculo->toArray(),
            ];
        })->toArray();

        return Inertia::render('Reporte/ReporteIndex', [
            'ultimasRentas' => $ultimasRentas,
            'reparaciones' => iterator_to_array($reparaciones),
            'autosMasRentados2Meses' => $autosMasRentados2MesesArray,
        ]);
    }
}
