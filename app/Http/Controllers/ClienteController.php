<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
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
}
