<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Models\Renta;
use App\Models\Setting;
use App\Models\Vehiculo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RentaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Renta/RentaIndex', [
            'rentas' => Renta::with(['user', 'vehiculo', 'cliente'])->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Renta/RentaCreate', [
            'vehiculos' => Vehiculo::where('estatus', 'disponible')->get()->toArray(),
            'clientes' => Cliente::where('estatus', 'activo')->get()->toArray(),
            'renta_por_dia' => Setting::where('key', 'rent_per_day')->first()->value ?? 10,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'vehiculo_id' => 'required|exists:vehiculos,id',
            'cliente_id' => 'required|exists:clientes,id',
            'fecha_renta' => 'required|date',
            'cantidad_dias' => 'required|integer|min:1',
            'kilometraje_salida' => 'required|integer|min:0',
            'tanque_gasolina' => 'required|string|in:lleno,medio,vacio',
        ]);

        $importe_renta = (Setting::where('key', 'rent_per_day')->first()->value ?? 10) * $request->cantidad_dias;

        Renta::create([
            ...$request->all(),
            'importe_renta' => $importe_renta,
            'user_id' => auth()->id(),
        ]);

        Vehiculo::where('id', $request->vehiculo_id)
            ->update(['estatus' => 'rentado']);

        return redirect()->route('renta.index')->with('success', 'Renta creada exitosamente.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $renta = Renta::with(['user', 'vehiculo', 'cliente'])->findOrFail($id);
        return Inertia::render('Renta/RentaEdit', [
            'renta' => $renta->toArray(),
            'renta_por_dia' => Setting::where('key', 'rent_per_day')->first()->value ?? 10,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $renta = Renta::findOrFail($id);
        $request->validate([
            'fecha_devolucion' => 'required|date',
            'kilometraje_llegada' => 'required|integer|min:0',
            'tanque_gasolina' => 'required|string|in:lleno,medio,vacio',
            'cantidad_dias' => 'required|integer|min:1',
            'observaciones_devolucion' => 'nullable|string|max:255',
            'importe_renta' => 'required|numeric|min:0',
        ]);

        $importe_renta = (Setting::where('key', 'rent_per_day')->first()->value ?? 10) * $request->cantidad_dias;

        $renta->fill([
            ...$request->all(),
            'importe_renta' => $importe_renta,
            'regresado' => true,
            'user_id' => auth()->id(),
        ]);
        $renta->save();

        Vehiculo::where('id', $renta->vehiculo_id)
            ->update(['estatus' => 'disponible']);

        return redirect()->route('renta.index')->with('success', 'Renta actualizada exitosamente.');
    }
}
