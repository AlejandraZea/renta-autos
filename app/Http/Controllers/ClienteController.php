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
        return Inertia::render('Clientes/ClienteIndex', [
            'clientes' => Cliente::all()->toArray(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Clientes/ClienteCreate');
    }

    public function store(Request $request)
    {
            $validated = $request->validate([
                'apellido' => 'required|string|max:255',
                'nombre' => 'required|string|max:255',
                'direccion' => 'required|string|max:255',
                'tipo_documento' => 'required|in:DNI,Pasaporte,Cedula,Otro',
                'numero_documento' => 'required|integer|max:50|unique:clientes,numero_documento',
                'numero_licencia' => 'required|integer|max:50',
                'email' => 'required|string|lowercase|email|max:255|unique:Clientes,email',
                'telefono' => 'required|integer|max:50',
                'estatus' => 'required|in:activo,inactivo,suspendido'
            ]);

        \App\Models\Cliente::create($validated);

        return redirect()->route('clientes.index')->with('success', 'Cliente creado correctamente.');
    }
}
