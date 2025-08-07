<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cliente;

class ClienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $clientes = [
            [
                'apellido' => 'Hernández',
                'nombre' => 'Ricardo',
                'direccion' => 'Av. Reforma 123, CDMX',
                'tipo_documento' => 'INE',
                'numero_documento' => 'INE1234567890',
                'numero_licencia' => 'LIC123456',
                'email' => 'ricardo.hernandez@example.com',
                'telefono' => '5523456789',
                'estatus' => 'activo',
            ],
            [
                'apellido' => 'López',
                'nombre' => 'María',
                'direccion' => 'Calle 5 de Mayo 456, Puebla',
                'tipo_documento' => 'Pasaporte',
                'numero_documento' => 'PAS987654321',
                'numero_licencia' => 'LIC654321',
                'email' => 'maria.lopez@example.com',
                'telefono' => '2211234567',
                'estatus' => 'activo',
            ],
            [
                'apellido' => 'González',
                'nombre' => 'Juan',
                'direccion' => 'Blvd. Benito Juárez 789, Oaxaca',
                'tipo_documento' => 'INE',
                'numero_documento' => 'INE9988776655',
                'numero_licencia' => 'LIC998877',
                'email' => 'juan.gonzalez@example.com',
                'telefono' => '9514567890',
                'estatus' => 'suspendido',
            ],
            [
                'apellido' => 'Martínez',
                'nombre' => 'Ana',
                'direccion' => 'Av. Universidad 101, Toluca',
                'tipo_documento' => 'INE',
                'numero_documento' => 'INE1122334455',
                'numero_licencia' => 'LIC112233',
                'email' => 'ana.martinez@example.com',
                'telefono' => '7229876543',
                'estatus' => 'activo',
            ],
            [
                'apellido' => 'Ramírez',
                'nombre' => 'Luis',
                'direccion' => 'Calle Hidalgo 33, Querétaro',
                'tipo_documento' => 'Pasaporte',
                'numero_documento' => 'PAS44556677',
                'numero_licencia' => 'LIC334455',
                'email' => 'luis.ramirez@example.com',
                'telefono' => '4423456789',
                'estatus' => 'inactivo',
            ],
            [
                'apellido' => 'Torres',
                'nombre' => 'Carmen',
                'direccion' => 'Col. Las Flores, León',
                'tipo_documento' => 'INE',
                'numero_documento' => 'INE5566778899',
                'numero_licencia' => 'LIC778899',
                'email' => 'carmen.torres@example.com',
                'telefono' => '4771234567',
                'estatus' => 'activo',
            ],
            [
                'apellido' => 'Morales',
                'nombre' => 'Pedro',
                'direccion' => 'Av. Insurgentes 220, CDMX',
                'tipo_documento' => 'Pasaporte',
                'numero_documento' => 'PAS99887766',
                'numero_licencia' => 'LIC009988',
                'email' => 'pedro.morales@example.com',
                'telefono' => '5588776655',
                'estatus' => 'activo',
            ],
            [
                'apellido' => 'Vega',
                'nombre' => 'Laura',
                'direccion' => 'Calle 16 de Septiembre 99, Mérida',
                'tipo_documento' => 'INE',
                'numero_documento' => 'INE3344556677',
                'numero_licencia' => 'LIC223344',
                'email' => 'laura.vega@example.com',
                'telefono' => '9998765432',
                'estatus' => 'activo',
            ],
            [
                'apellido' => 'Rojas',
                'nombre' => 'Diego',
                'direccion' => 'Zona Centro, Monterrey',
                'tipo_documento' => 'Pasaporte',
                'numero_documento' => 'PAS11224433',
                'numero_licencia' => 'LIC667788',
                'email' => 'diego.rojas@example.com',
                'telefono' => '8187654321',
                'estatus' => 'suspendido',
            ],
            [
                'apellido' => 'Sánchez',
                'nombre' => 'Patricia',
                'direccion' => 'Av. Juárez 88, Chihuahua',
                'tipo_documento' => 'INE',
                'numero_documento' => 'INE6677889900',
                'numero_licencia' => 'LIC556677',
                'email' => 'patricia.sanchez@example.com',
                'telefono' => '6145678901',
                'estatus' => 'activo',
            ],
            [
                'apellido' => 'Navarro',
                'nombre' => 'Jorge',
                'direccion' => 'Calle Morelos 202, Zacatecas',
                'tipo_documento' => 'INE',
                'numero_documento' => 'INE4455667788',
                'numero_licencia' => 'LIC334466',
                'email' => 'jorge.navarro@example.com',
                'telefono' => '4923456789',
                'estatus' => 'inactivo',
            ],
            [
                'apellido' => 'Castro',
                'nombre' => 'Luisa',
                'direccion' => 'Col. San Rafael, CDMX',
                'tipo_documento' => 'Pasaporte',
                'numero_documento' => 'PAS33445522',
                'numero_licencia' => 'LIC112211',
                'email' => 'luisa.castro@example.com',
                'telefono' => '5534567890',
                'estatus' => 'activo',
            ],
            [
                'apellido' => 'Reyes',
                'nombre' => 'Carlos',
                'direccion' => 'Av. Revolución 300, Guadalajara',
                'tipo_documento' => 'INE',
                'numero_documento' => 'INE11226688',
                'numero_licencia' => 'LIC334422',
                'email' => 'carlos.reyes@example.com',
                'telefono' => '3334567890',
                'estatus' => 'activo',
            ],
            [
                'apellido' => 'Flores',
                'nombre' => 'Isabel',
                'direccion' => 'Callejón del Sol 45, Morelia',
                'tipo_documento' => 'Pasaporte',
                'numero_documento' => 'PAS77889911',
                'numero_licencia' => 'LIC556644',
                'email' => 'isabel.flores@example.com',
                'telefono' => '4432345678',
                'estatus' => 'inactivo',
            ],
            [
                'apellido' => 'Delgado',
                'nombre' => 'Fernando',
                'direccion' => 'Av. Tecnológico 404, Aguascalientes',
                'tipo_documento' => 'INE',
                'numero_documento' => 'INE99884411',
                'numero_licencia' => 'LIC998844',
                'email' => 'fernando.delgado@example.com',
                'telefono' => '4499876543',
                'estatus' => 'activo',
            ],
        ];

        foreach ($clientes as $cliente) {
            Cliente::create($cliente);
        }
    }
}
