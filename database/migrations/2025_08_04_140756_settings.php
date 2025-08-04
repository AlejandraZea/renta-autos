<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use MongoDB\Laravel\Schema\Blueprint;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->unique('key');
            $table->enum('type', ['string', 'integer', 'decimal', 'boolean'])->default('string');
            $table->text('value')->nullable();

            $table->raw([
                'validator' => [
                    '$jsonSchema' => [
                        'bsonType' => 'object',
                        'required' => ['key', 'type'],
                        'properties' => [
                            'key' => ['bsonType' => 'string'],
                            'type' => ['enum' => ['string', 'integer', 'decimal', 'boolean']],
                            'value' => ['bsonType' => ['string', 'int', 'double', 'bool'], 'description' => 'Valor de la configuración']
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
        Schema::dropIfExists('settings');
    }
};
