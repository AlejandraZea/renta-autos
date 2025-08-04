<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Renta extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'vehiculo_id',
        'cliente_id',
        'fecha_renta',
        'cantidad_dias',
        'importe_renta',
        'kilometraje_salida',
        'kilometraje_llegada',
        'fecha_devolucion',
        'tanque_gasolina',
        'importe_adicional_por_tanque',
        'observaciones_devolucion',
        'regresado',
    ];

    protected $casts = [
        'fecha_renta' => 'date',
        'fecha_devolucion' => 'date',
        'kilometraje_salida' => 'integer',
        'kilometraje_llegada' => 'integer',
        'importe_adicional_por_tanque' => 'decimal:2',
        'regresado' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function vehiculo()
    {
        return $this->belongsTo(Vehiculo::class);
    }

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }
}
