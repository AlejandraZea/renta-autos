<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RentaController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VehiculoController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'foo' => User::all()->toArray()
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('rentas', RentaController::class)->names([
        'index' => 'renta.index',
        'create' => 'renta.create',
        'store' => 'renta.store',
        'show' => 'renta.show',
        'edit' => 'renta.edit',
        'update' => 'renta.update',
        'destroy' => 'renta.destroy',
    ]);
    //rutas de clientes
    Route::get('/clientes', [ClienteController::class, 'index'])->name('clientes.index');
    Route::get('/clientes/create', [ClienteController::class, 'create'])->name('clientes.create');
    Route::post('/clientes', [ClienteController::class, 'store'])->name('clientes.store');
    Route::get('/clientes/{cliente}/edit', [ClienteController::class, 'edit'])->name('clientes.edit');
    Route::put('/clientes/{cliente}', [ClienteController::class, 'update'])->name('clientes.update');
    Route::delete('/clientes/{id}', [ClienteController::class, 'destroy'])->name('clientes.destroy');
    Route::get('/clientes/{id}', [ClienteController::class, 'delete'])->name('clientes.delete');

    Route::resource('vehiculos', VehiculoController::class)->names([
        'index' => 'vehiculos',
        'create' => 'vehiculo.create',
        'store' => 'vehiculo.store',
        'edit' => 'vehiculo.edit',
        'update' => 'vehiculo.update',
        'destroy' => 'vehiculo.destroy',
    ]);

    Route::resource('users', UserController::class)->names([
        'index' => 'user.index',
        'create' => 'user.create',
        'store' => 'user.store',
        'edit' => 'user.edit',
        'update' => 'user.update',
        'destroy' => 'user.destroy',
    ]);
});

require __DIR__.'/auth.php';
