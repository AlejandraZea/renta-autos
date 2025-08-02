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
        'fecha_inicio_reparacion',
        'motivo',
        'costo_reparacion',
        'dias_no_disponible',
        'fecha_fin_reparacion'
    ];
    protected $hidden = ['remember_token'];
    protected $casts = [
        'costo_reparacion' => 'decimal:2',
        'dias_no_disponible' => 'integer',
    ];
    use HasFactory, Notifiable;
    /**
     * 
     * \\ The attributes that are mass assignable.
     * @var array<string>
     */
}