<?php
// app/Models/Cliente.php
namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
// use Jenssegers\Mongodb\Eloquent\Model;

class Renta extends authenticatable
{
    protected $collection = 'rentas';

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

    protected $hidden = ['remember_token'];

    protected $casts = [
        'kilometraje_salida' => 'integer',
        'kilometraje_llegada' => 'integer',
        'tanque_gasolina' => 'integer',
        'importe_adicional_por_tanque' => 'decimal:2',
        'importe_por_demorado' => 'decimal:2',
    ];
    use HasFactory, Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */

}