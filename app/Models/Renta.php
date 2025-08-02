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
        'FechaRenta',
        'CantidadDias',
        'FechaDevolucionPrevista',
        'ImporteRenta',
        'KilometrajeSalida',
        'KilometrajeLlegada',
        'FechaDevolucionReal',
        'EstadoEntregaVehiculo',
        'TanqueGasolina',
        'ImporteAdicionalPorTanque',
        'ImportePorDemorado',
        'ObservacionesDevolucion'
    ];

    protected $hidden = ['remember_token'];

    protected $casts = [
        'EstadoEntregaVehiculo' => 'boolean',
        'KilometrajeSalida' => 'integer',
        'KilometrajeLlegada' => 'integer',
        'TanqueGasolina' => 'integer',
        'ImporteAdicionalPorTanque' => 'decimal:2',
        'ImportePorDemorado' => 'decimal:2',
    ];
    use HasFactory, Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    
}