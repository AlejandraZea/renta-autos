<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Reparacion extends Model
{
    use HasFactory;

    protected $table = 'reparaciones';

    protected $fillable = [
        'fecha_inicio_reparacion',
        'motivo',
        'costo_reparacion',
        'dias_no_disponible',
        'fecha_fin_reparacion'
    ];

    protected $casts = [
        'costo_reparacion' => 'decimal:2',
        'dias_no_disponible' => 'integer',
    ];
}
