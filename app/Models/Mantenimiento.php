<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Mantenimiento extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'vehiculo_id',
        'fecha_reparacion',
        'motivo',
        'costo_reparacion',
        'fecha_fin_reparacion',
        'finalizado'
    ];

    protected $casts = [
        'finalizado' => 'boolean',
        'fecha_reparacion' => 'datetime',
        'fecha_fin_reparacion' => 'datetime',
        'costo_reparacion' => 'float'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function vehiculo()
    {
        return $this->belongsTo(Vehiculo::class);
    }

}
