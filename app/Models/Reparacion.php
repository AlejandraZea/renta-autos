<?php
// app/Models/Cliente.php
namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
// use Jenssegers\Mongodb\Eloquent\Model;

class Reparacion extends authenticatable
{
    protected $collection = 'reparaciones';

    protected $fillable = [
        'FechaReparacion',
        'Motivo',
        'CostoReparacion',
        'DiasNoDisponible',
        'FechaFinReparacion'
    ];
    protected $hidden = ['remember_token'];
    protected $casts = [
        'CostoReparacion' => 'decimal:2',
        'DiasNoDisponible' => 'integer',
    ];
    use HasFactory, Notifiable;
    /**
     * 
     * \\ The attributes that are mass assignable.
     * @var array<string>
     */
}