<?php

use App\Http\Controllers\ExpensesController;
use App\Http\Controllers\IncomesController;
use App\Http\Controllers\PDFController;
use Illuminate\Support\Facades\Route;

Route::prefix("admin")->group(function() {
    Route::controller(IncomesController::class)->group(function() {
        Route::get("/incomes", "index")->name("incomes");
        Route::post("/incomes", "store")->name("incomes.store");
        Route::put("/incomes/{id}", "update")->name("incomes.update");
        Route::delete("/incomes/{id}", "destroy")->name("incomes.destroy");
    });

    Route::controller(ExpensesController::class)->group(function() {
        Route::get("/expenses", "index")->name("expenses");
        Route::post("/expenses", "store")->name("expenses.store");
        Route::put("/expenses/{id}", "update")->name("expenses.update");
        Route::delete("/expenses/{id}", "destroy")->name("expenses.destroy");
    });
});

Route::get('/export-pdf', [PDFController::class, 'export']);

