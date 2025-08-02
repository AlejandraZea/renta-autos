<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Renta extends Model
{
    use HasFactory;
    protected $fillable = [
        'fecha_renta',
        'cantidad_dias',
        'fecha_devolucion_prevista',
        'importe_renta',
        'kilometraje_salida',
        'kilometraje_llegada',
        'fecha_devolucion_real',
        'estado_entrega_vehiculo',
        'tanque_gasolina',
        'importe_adicional_por_tanque',
        'importe_por_demorado',
        'observaciones_devolucion'
    ];

    protected $casts = [
        'kilometraje_salida' => 'integer',
        'kilometraje_llegada' => 'integer',
        'tanque_gasolina' => 'integer',
        'importe_adicional_por_tanque' => 'decimal:2',
        'importe_por_demorado' => 'decimal:2',
    ];
}
