<?php

namespace Database\Seeders;

use App\Models\Vehiculo;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Vehiculo::insert([
            [
                'anio' => 2020,
                'marca' => 'Toyota',
                'modelo' => 'Corolla',
                'placa' => 'ABC123',
                'descripcion' => 'Sedán compacto, eficiente en combustible.',
                'color' => 'Blanco',
                'estatus' => 'disponible',
                'kilometraje_actual' => 15000,
            ],
            [
                'anio' => 2019,
                'marca' => 'Honda',
                'modelo' => 'Civic',
                'placa' => 'XYZ456',
                'descripcion' => 'Sedán deportivo, excelente rendimiento.',
                'color' => 'negro',
                'estatus' => 'rentado',
                'kilometraje_actual' => 20000
            ],
            [
                'anio' => 2025,
                'marca' => 'Kia',
                'modelo' => 'Sportage',
                'placa' => 'QWE3456',
                'descripcion' => 'Sedán deportivo, excelente rendimiento.',
                'color' => 'negro',
                'estatus' => 'mantenimiento',
                'kilometraje_actual' => 0
            ],
        ]);
    }
}
