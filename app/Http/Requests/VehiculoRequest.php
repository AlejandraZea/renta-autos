<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class VehiculoRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'anio' => 'required|integer',
            'marca' => 'required|string|max:255',
            'modelo' => 'required|string|max:255',
            'placa' => [
                'required',
                'string',
                'max:10',
                Rule::unique('vehiculos', 'placa')->ignore($this->id ? $this->id : null)
            ],
            'descripcion' => 'nullable|string|max:500',
            'color' => 'required|string|max:50',
            'estatus' => 'required|string|in:disponible,no_disponible,mantenimiento',
            'kilometraje_actual' => 'required|integer|min:0'
        ];
    }
}
