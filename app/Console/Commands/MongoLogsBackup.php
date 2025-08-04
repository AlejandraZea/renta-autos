<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class MongoLogsBackup extends Command
{
    protected $signature = 'mongo:backup-logs';
    protected $description = 'Respalda logs de la base de datos cada 2 horas';

    public function handle()
    {
        $date = now()->format('Y-m-d_H-i-s');
        $backupPath = storage_path("app/backups/logs_{$date}.bson");

        $command = "mongodump --uri=\"".env('DB_URI')."\" --collection=logs --out={$backupPath}";
        exec($command);

        $this->info("Respaldo de logs generado en {$backupPath}");
    }
}
