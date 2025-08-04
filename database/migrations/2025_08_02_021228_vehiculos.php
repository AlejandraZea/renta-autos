<?php

use Illuminate\Database\Migrations\Migration;
use MongoDB\Laravel\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehiculos', function (Blueprint $collection) {
            $collection->unique('placa');
            $collection->enum('estatus', ['disponible', 'renta', 'mantenimiento'])->default('disponible');


            $collection->raw([
                'validator' => [
                    '$jsonSchema' => [
                        'bsonType' => 'object',
                        'required' => ['placa', 'estatus'],
                        'properties' => [
                            'placa' => ['bsonType' => 'string'],
                            'estatus' => [
                                'enum' => ['disponible', 'renta', 'mantenimiento'],
                                'description' => 'Estado del vehículo'
                            ],
                            'marca' => ['bsonType' => 'string'],
                            'modelo' => ['bsonType' => 'string'],
                            'anio' => ['bsonType' => 'int']
                        ]
                    ]
                ],
                'validationLevel' => 'moderate'
            ]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehiculos');
    }
};
