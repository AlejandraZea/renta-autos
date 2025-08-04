<?php

namespace App\Http\Controllers;

use App\Http\Requests\VehiculoRequest;
use App\Models\Renta;
use App\Models\Vehiculo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VehiculoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Vehiculo/VehiculoIndex', [
            'vehiculos' => Vehiculo::all()->toArray()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Vehiculo/VehiculoCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(VehiculoRequest $request)
    {
        Vehiculo::create($request->validated());
        return redirect()->route('vehiculos')->with('success', 'Vehículo creado exitosamente.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $vehiculo = Vehiculo::findOrFail($id);
        return Inertia::render('Vehiculo/VehiculoEdit', [
            'vehiculo' => $vehiculo
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(VehiculoRequest $request, string $id)
    {
        $vehiculo = Vehiculo::findOrFail($id);
        $vehiculo->update($request->validated());

        return redirect()->route('vehiculos')->with('success', 'Vehículo actualizado exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Renta::where('vehiculo_id', $id)->delete();
        $vehiculo = Vehiculo::findOrFail($id);
        $vehiculo->delete();

        return redirect()->route('vehiculos')->with('success', 'Vehículo eliminado exitosamente.');
    }
}
