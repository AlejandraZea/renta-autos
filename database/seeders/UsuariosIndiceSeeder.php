<?php
// database/seeders/UsuariosIndiceSeeder.php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsuariosIndiceSeeder extends Seeder
{
    public function run()
    {
        DB::connection('mongodb')->collection('usuarios')->raw(function($collection) {
            $collection->createIndex(
                ['nombre_usuario' => 1],
                ['unique' => true, 'name' => 'unique_nombre_usuario']
            );
        });
    }
}