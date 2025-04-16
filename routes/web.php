<?php

use App\Http\Controllers\IncomesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix("admin")->group(function() {
    Route::controller(IncomesController::class)->group(function() {
        Route::get("/incomes", "index")->name("incomes");
    });
});
