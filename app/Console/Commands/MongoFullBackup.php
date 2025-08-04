<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class MongoFullBackup extends Command
{
    protected $signature = 'mongo:backup-full';
    protected $description = 'Genera un respaldo completo de la base de datos MongoDB';

    public function handle()
    {
        $date = now()->format('Y-m-d_H-i-s');
        $backupPath = storage_path("app/backups/full_{$date}");

        $command = "mongodump --uri=\"".env('DB_URI')."\" --out={$backupPath}";
        exec($command);

        $this->info("Respaldo completo generado en {$backupPath}");
    }
}

