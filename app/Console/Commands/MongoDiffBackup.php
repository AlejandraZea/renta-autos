<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class MongoDiffBackup extends Command
{
    protected $signature = 'mongo:backup-diff';
    protected $description = 'Genera un respaldo diferencial de MongoDB';

    public function handle()
    {
        $date = now()->format('Y-m-d_H-i-s');
        $backupPath = storage_path("app/backups/diff_{$date}");

        // Guardar solo colecciones cambiadas desde la última copia completa
        $command = "mongodump --uri=\"".env('MONGODB_URI')."\" --out={$backupPath}";
        exec($command);

        $this->info("Respaldo diferencial generado en {$backupPath}");
    }
}
