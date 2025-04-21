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

        if($page > $data->lastPage() || $page < 0) {
            return redirect()->route('expenses');
        }
        return Inertia::render("admin/Expenses", [
            "title" => "Expenses",
            "data" => $data
        ]);
    }

    public function store(Request $request) {
        $validated_data = $request->validate([
            "name" => "required|string|min:3",
            "category" => "required|string",
            "amount" => "required|integer",
            "payment" => "required|string",
            "description" => "required|string",
            "transaction_date" => "required|date"
        ]);
        Expense::create($validated_data);
        return to_route("expenses");
    }

    public function update(Request $request, $id) {
        $validated_data = $request->validate([
            "name" => "required|string|min:3",
            "category" => "required|string",
            "amount" => "required|integer",
            "payment" => "required|string",
            "description" => "required|string",
            "transaction_date" => "required|date"
        ]);
        Expense::where("id", $id)->update($validated_data);
        return to_route("expenses");
    }

    public function destroy($id) {
        Expense::where("id", $id)->delete();
        return back()->with("success", "Success delete income data");
    }
}
