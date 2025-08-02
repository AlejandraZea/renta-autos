<?php
// app/Models/Cliente.php
namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
// use Jenssegers\Mongodb\Eloquent\Model;

class Vehiculo extends authenticatable
{
    protected $collection = 'vehiculos';

    protected $fillable = [
        'Anio',
        'Marca',
        'Modelo',
        'Placa',
        'Descripcion',
        'Color',
        'EstadoVehiculo',
        'KilometrajeActual'
    ];
    protected $hidden = ['remember_token'];
    protected $casts = [
        'EstadoVehiculo' => 'boolean',
        'KilometrajeActual' => 'integer',
    ];
    use HasFactory, Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */

}
