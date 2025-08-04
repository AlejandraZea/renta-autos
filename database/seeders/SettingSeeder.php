<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Setting::create([
            'key' => 'app_name',
            'type' => 'string',
            'value' => 'Car Rental System',
        ]);

        Setting::create([
            'key' => 'app_version',
            'type' => 'string',
            'value' => '1.0.0',
        ]);

        Setting::create([
            'key' => 'default_currency',
            'type' => 'string',
            'value' => 'MXN',
        ]);

        Setting::create([
            'key' => 'rent_per_day',
            'type' => 'decimal',
            'value' => '500',
        ]);
    }
}
