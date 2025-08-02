<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = ['propietario', 'encargado autos', 'empleado mostrador'];

        foreach ($roles as $rol) {
            Role::create(['rol' => $rol]);
        }
    }
}
