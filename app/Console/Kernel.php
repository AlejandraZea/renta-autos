<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule)
    {
        // Full backup semanal
        $schedule->command('mongo:backup-full')->weeklyOn(1, '02:00'); // Lunes 2am

        // Backup diferencial diario
        $schedule->command('mongo:backup-diff')->dailyAt('02:00');

        // Backup de logs cada 2 horas
        $schedule->command('mongo:backup-logs')->everyTwoHours();

    }

    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
