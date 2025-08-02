<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'ale',
            'email' => 'ale@gmail.com',
            'password' => bcrypt('12345678'),
            'rol' => 'propietario',
        ]);
    }
}
