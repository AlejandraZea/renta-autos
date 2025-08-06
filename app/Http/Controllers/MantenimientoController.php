<?php
namespace App\Http\Controllers;

use App\Models\Mantenimiento;
use App\Models\Vehiculo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MantenimientoController extends Controller
{
    public function index()
    {
        return Inertia::render('Mantenimiento/MantenimientoIndex', [
            'mantenimientos' => Mantenimiento::with(['vehiculo', 'user'])->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Mantenimiento/MantenimientoCreate', [
            'vehiculos' => Vehiculo::where('estatus', 'disponible')->get()->toArray()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'vehiculo_id' => 'required',
            'fecha_reparacion' => 'required|date',
            'motivo' => 'required|string|max:255',
            'costo_reparacion' => 'required|numeric|min:0',
            'fecha_fin_reparacion' => 'nullable|date|after_or_equal:fecha_reparacion',
        ]);

        Mantenimiento::create([
            ...$validated,
            'user_id'=>auth()->id()
        ]);

        Vehiculo::where('id', $validated['vehiculo_id'])->update([
            'estatus' => 'mantenimiento'
        ]);

        return redirect()->route('mantenimiento.index');
    }

    public function edit($id)
    {
        $mantenimiento = Mantenimiento::findOrFail($id);

        $vehiculos = Vehiculo::where('estatus', 'disponible')->get()->toArray();
        $vehiculo = Vehiculo::find($mantenimiento->vehiculo_id);
        if ($vehiculo){
            $vehiculos[] = $vehiculo;
        }

        return Inertia::render('Mantenimiento/MantenimientoEdit', [
            'mantenimiento' => $mantenimiento,
            'vehiculos' => $vehiculos
        ]);
    }

    public function update(Request $request, Mantenimiento $mantenimiento)
    {
        $validated = $request->validate([
            'vehiculo_id' => 'required',
            'fecha_reparacion' => 'required|date',
            'motivo' => 'required|string|max:255',
            'costo_reparacion' => 'required|numeric|min:0',
            'fecha_fin_reparacion' => 'nullable|date|after_or_equal:fecha_reparacion',
        ]);

        $mantenimiento->fill($validated);
        $mantenimiento->save();

        return redirect()->route('mantenimiento.index')->with('success', 'Mantenimiento actualizado correctamente.');
    }

    public function finish(Mantenimiento $mantenimiento)
    {
        $mantenimiento->finalizado = true;
        $mantenimiento->save();

        Vehiculo::where('id', $mantenimiento->vehiculo_id)
            ->update([
                'estatus' => 'disponible'
            ]);

        return redirect()->route('mantenimiento.index')->with('success', 'Mantenimiento eliminado correctamente.');
    }
}
