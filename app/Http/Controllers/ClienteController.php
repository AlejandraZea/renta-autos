<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use http\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;
use function Termwind\render;

class ClienteController extends Controller
{
    public function index()
    {
        $clientes = Cliente::all()->map(function ($cliente) {
            return [
                'id' => (string) $cliente->_id, // ✅ esto asegura compatibilidad con Ziggy
                'nombre' => $cliente->nombre,
                'apellido' => $cliente->apellido,
                'numero_documento' => $cliente->numero_documento,
                'numero_licencia' => $cliente->numero_licencia,
                'email' => $cliente->email,
                'telefono' => $cliente->telefono,
                'estatus' => $cliente->estatus,
            ];
        });

        return Inertia::render('Clientes/ClienteIndex', [
            'clientes' => $clientes,
        ]);
    }


    public function create()
    {
        return Inertia::render('Clientes/ClienteCreate');
    }

    public function store(Request $request)
    {
            $validated = $request->validate([
                'apellido' => 'string|max:255',
                'nombre' => 'string|max:255',
                'direccion' => 'string|max:255',
                'tipo_documento' => 'string|in:dni,pasaporte,cedula,otro',
                'numero_documento' => 'integer|unique:clientes,numero_documento',
                'numero_licencia' => 'integer',
                'estatus' => 'string|in:activo,inactivo,suspendido,suspendido por mal uso',
                'telefono' => 'integer',
                'estatus' => 'required|string|in:activo,inactivo,suspendido,suspendido por mal uso',
            ]);

        \App\Models\Cliente::create($validated);

        return redirect()->route('clientes.index')->with('success', 'Cliente creado correctamente.');
    }

    public function delete($id){
        $cliente = Cliente::findOrfail($id);
        return Inertia::render('Clientes/ClienteDelete', [
            'cliente' => $cliente,
        ]);
    }
    //el destroy va a realizar la funcion del delete
    public function destroy($id)
    {
        $cliente = Cliente::findOrFail($id);
        $cliente->delete();

        return redirect()->route('clientes.index');
    }

}
