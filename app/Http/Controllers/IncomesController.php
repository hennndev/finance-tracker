<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IncomesController extends Controller
{
    public function index() {
        return Inertia::render("admin/Incomes", [
            "title" => "Incomes"
        ]);
    }
}
