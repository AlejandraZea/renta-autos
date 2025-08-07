<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Vehiculo;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vehiculos = [
            [
                'anio' => 2023,
                'marca' => 'Toyota',
                'modelo' => 'Corolla',
                'placa' => 'ABC1234',
                'descripcion' => 'Sedán compacto eficiente',
                'color' => 'Blanco',
                'estatus' => 'disponible',
                'kilometraje_actual' => 15000,
            ],
            [
                'anio' => 2024,
                'marca' => 'Tesla',
                'modelo' => 'Model 3',
                'placa' => 'TESL345',
                'descripcion' => 'Vehículo eléctrico con piloto automático',
                'color' => 'Rojo',
                'estatus' => 'rentado',
                'kilometraje_actual' => 8000,
            ],
            [
                'anio' => 2022,
                'marca' => 'Nissan',
                'modelo' => 'Versa',
                'placa' => 'NIS9988',
                'descripcion' => 'Auto económico y confiable',
                'color' => 'Gris',
                'estatus' => 'disponible',
                'kilometraje_actual' => 22000,
            ],
            [
                'anio' => 2023,
                'marca' => 'Ford',
                'modelo' => 'Escape',
                'placa' => 'FOR5678',
                'descripcion' => 'SUV familiar con gran espacio',
                'color' => 'Azul',
                'estatus' => 'mantenimiento',
                'kilometraje_actual' => 18500,
            ],
            [
                'anio' => 2025,
                'marca' => 'Chevrolet',
                'modelo' => 'Onix',
                'placa' => 'CHE1234',
                'descripcion' => 'Sedán moderno y eficiente',
                'color' => 'Negro',
                'estatus' => 'disponible',
                'kilometraje_actual' => 500,
            ],
            [
                'anio' => 2024,
                'marca' => 'Hyundai',
                'modelo' => 'Tucson',
                'placa' => 'HYU7777',
                'descripcion' => 'SUV versátil de nueva generación',
                'color' => 'Verde',
                'estatus' => 'rentado',
                'kilometraje_actual' => 9600,
            ],
            [
                'anio' => 2022,
                'marca' => 'Mazda',
                'modelo' => 'CX-5',
                'placa' => 'MAZ4567',
                'descripcion' => 'SUV deportivo y elegante',
                'color' => 'Rojo',
                'estatus' => 'disponible',
                'kilometraje_actual' => 26000,
            ],
            [
                'anio' => 2023,
                'marca' => 'Kia',
                'modelo' => 'Rio',
                'placa' => 'KIA8888',
                'descripcion' => 'Auto compacto con estilo',
                'color' => 'Amarillo',
                'estatus' => 'mantenimiento',
                'kilometraje_actual' => 15000,
            ],
            [
                'anio' => 2024,
                'marca' => 'Volkswagen',
                'modelo' => 'Jetta',
                'placa' => 'VW45678',
                'descripcion' => 'Sedán alemán con gran desempeño',
                'color' => 'Plata',
                'estatus' => 'disponible',
                'kilometraje_actual' => 7000,
            ],
            [
                'anio' => 2025,
                'marca' => 'BMW',
                'modelo' => 'X1',
                'placa' => 'BMW9999',
                'descripcion' => 'SUV de lujo compacto',
                'color' => 'Negro',
                'estatus' => 'rentado',
                'kilometraje_actual' => 4000,
            ],
            [
                'anio' => 2023,
                'marca' => 'Honda',
                'modelo' => 'Civic',
                'placa' => 'HONDA22',
                'descripcion' => 'Sedán confiable y moderno',
                'color' => 'Azul Marino',
                'estatus' => 'disponible',
                'kilometraje_actual' => 11000,
            ],
            [
                'anio' => 2024,
                'marca' => 'Renault',
                'modelo' => 'Kwid',
                'placa' => 'RENAULT5',
                'descripcion' => 'Compacto urbano ideal para ciudad',
                'color' => 'Naranja',
                'estatus' => 'disponible',
                'kilometraje_actual' => 3000,
            ],
            [
                'anio' => 2023,
                'marca' => 'Suzuki',
                'modelo' => 'Swift',
                'placa' => 'SUZ5555',
                'descripcion' => 'Deportivo urbano ligero',
                'color' => 'Blanco',
                'estatus' => 'mantenimiento',
                'kilometraje_actual' => 8700,
            ],
            [
                'anio' => 2022,
                'marca' => 'Jeep',
                'modelo' => 'Compass',
                'placa' => 'JEEP678',
                'descripcion' => 'SUV todoterreno con tecnología',
                'color' => 'Verde Oscuro',
                'estatus' => 'rentado',
                'kilometraje_actual' => 24000,
            ],
            [
                'anio' => 2025,
                'marca' => 'Audi',
                'modelo' => 'A3',
                'placa' => 'AUDI333',
                'descripcion' => 'Compacto premium europeo',
                'color' => 'Gris Metálico',
                'estatus' => 'disponible',
                'kilometraje_actual' => 900,
            ],
        ];

        foreach ($vehiculos as $vehiculo) {
            Vehiculo::create($vehiculo);
        }
    }
}
