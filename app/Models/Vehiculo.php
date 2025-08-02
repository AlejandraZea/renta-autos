<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Vehiculo extends Model
{
    use HasFactory;

    protected $table = 'vehiculos';

    protected $fillable = [
        'anio',
        'marca',
        'modelo',
        'placa',
        'descripcion',
        'color',
        'estado_vehiculo',
        'kilometraje_actual'
    ];

    protected $casts = [
        'kilometraje_actual' => 'integer',
    ];
}
