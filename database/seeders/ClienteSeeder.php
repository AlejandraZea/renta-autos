<?php

namespace Database\Seeders;

use App\Models\Cliente;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Cliente::create([
            'apellido' => 'Doe',
            'nombre' => 'John',
            'direccion' => '123 Main St, Springfield',
            'tipo_documento' => 'DNI',
            'numero_documento' => '12345678',
            'numero_licencia' => 'A1234567',
            'email' => 'john@gmail.com',
            'telefono' => '1234567890',
            'estatus' => 'activo',
        ]);
    }
}
