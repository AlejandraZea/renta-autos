<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        $users = [
            [
                'name' => 'owner',
                'email' => 'owner@gmail.com',
                'password' => bcrypt('12345678'),
                'rol' => 'propietario',
            ],
            [
                'name' => 'encargado',
                'email' => 'encargardo@gmail.com',
                'password' => bcrypt('12345678'),
                'rol' => 'encargado_autos',
            ],
            [
                'name' => 'empleado',
                'email' => 'empleado_mostrador@gmail.com',
                'password' => bcrypt('12345678'),
                'rol' => 'empleado_mostrador',
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
