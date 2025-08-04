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
        'estatus', // disponible, rentado, mantenimiento.
        'kilometraje_actual'
    ];

    protected $casts = [
        'kilometraje_actual' => 'integer',
        'anio' => 'integer',
        'estatus' => 'string',
        'placa' => 'string',
    ];
}
