<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Setting extends Model
{
    protected $table = 'settings';
    protected $fillable = [
        'key',
        'type',
        'value',
    ];

    public $timestamps = false;

    public function getTypedValueAttribute()
    {
        return match ($this->type) {
            'boolean' => filter_var($this->value, FILTER_VALIDATE_BOOLEAN),
            'integer' => (int)$this->value,
            'float' => (float)$this->value,
            'decimal' => (float)$this->value,
            'array' => json_decode($this->value, true),
            default => $this->value,
        };
    }
}
