<?php

namespace App\Http\Controllers;

use App\Models\Mantenimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;
use MongoDB\BSON\UTCDateTime;

class ReporteMantenimientoController extends Controller
{
    function index(Request $request){
        $query = Mantenimiento::with('vehiculo')
            ->where('fecha_fin_reparacion', '!=', null);
        if ($request->input('fecha_inicio') && $request->input('fecha_fin')) {
            $fecha_inicio = new UTCDateTime( Carbon::parse($request->input('fecha_inicio'))->toDateTime() );
            $fecha_fin = new UTCDateTime( Carbon::parse($request->input('fecha_fin'))->toDateTime() );

            $query->where('fecha_inicio_reparacion', '>=', $fecha_inicio);
            $query->where('fecha_fin_reparacion', '<=', $fecha_fin);
        }

        $resultados = $query
            ->orderBy('fecha_fin_reparacion')
            ->get();

        return Inertia::render('Reporte/ReporteReparacionesIndex', [
            'resultados' => $resultados->toArray()
        ]);
    }
}
