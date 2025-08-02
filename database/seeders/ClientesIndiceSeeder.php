<?php
// database/seeders/ClientesIndiceSeeder.php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientesIndiceSeeder extends Seeder
{
    public function run()
    {
        DB::connection('mongodb')->collection('clientes')->raw(function($collection) {
            $collection->createIndex(
                ['NumeroDocumento' => 1],
                ['unique' => true, 'name' => 'unique_NumeroDocumento']
            );
        });
    }
}

