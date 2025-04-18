<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExpensesController extends Controller
{
    public function index(Request $request) {
        $page = $request->query("page");
        $data = Expense::latest()->paginate(10);

        if($page > $data->lastPage()) {
            return redirect()->route('incomes');
        }
        return Inertia::render("admin/Expenses", [
            "title" => "Incomes",
            "data" => $data
        ]);
    }

    public function store() {}

    public function update() {}

    public function destroy() {}
}
