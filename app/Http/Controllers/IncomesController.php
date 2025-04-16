<?php

namespace App\Http\Controllers;

use App\Models\Income;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IncomesController extends Controller
{
    public function index() {
        $data = Income::all();
        return Inertia::render("admin/Incomes", [
            "title" => "Incomes",
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
        Income::create($validated_data);
        return to_route("incomes");
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
        Income::where("id", $id)->update($validated_data);
        return to_route("incomes");
    }

    public function destroy($id) {
        Income::where("id", $id)->delete();
        return back()->with("success", "Success delete income data");
    }
}
