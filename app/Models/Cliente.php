<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'apellido',
        'nombre',
        'direccion',
        'tipo_documento',
        'numero_documento',
        'numero_licencia',
        'email',
        'telefono',
        'estatus' // 'activo', 'inactivo', 'suspendido'
    ];

    /**
     * The attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected $casts = [
        'telefono' => 'string',
    ];
}
