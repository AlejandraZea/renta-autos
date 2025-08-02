<?php
// database/seeders/VehiculosIndiceSeeder.php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VehiculosIndiceSeeder extends Seeder
{
    public function run()
    {
        DB::connection('mongodb')->collection('vehiculos')->raw(function($collection) {
            $collection->createIndex(
                ['Placa' => 1],
                ['unique' => true, 'name' => 'unique_Placa']
            );
        });
    }
}
