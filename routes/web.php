<?php

use App\Http\Controllers\IncomesController;
use Illuminate\Support\Facades\Route;

Route::prefix("admin")->group(function() {
    Route::controller(IncomesController::class)->group(function() {
        Route::get("/incomes", "index")->name("incomes");
        Route::post("/incomes", "store")->name("incomes.store");
        Route::put("/incomes/{id}", "update")->name("incomes.update");
        Route::delete("/incomes/{id}", "destroy")->name("incomes.destroy");
    });
});
