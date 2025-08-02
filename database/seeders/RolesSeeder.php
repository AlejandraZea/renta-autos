<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = ['propietario', 'encargado_autos', 'empleado_mostrador'];

        foreach ($roles as $rol) {
            Role::create(['rol' => $rol]);
        }
    }
}
