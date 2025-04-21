<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Models\Income;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class PDFController extends Controller
{
    public function export($transaction_name)
    {
        if($transaction_name !== "incomes" && $transaction_name !== "expenses") {
            return back()->with('error', 'Data tidak tersedia untuk diekspor.');
        }

        $data_transaction = collect();
        if($transaction_name === "incomes") {
            $data_transaction = Income::all();
        } 
        if($transaction_name === "expenses") {
            $data_transaction = Expense::all();
        }
        $data = [ 
            'title' => 'Laporan PDF Laravel',
            "transactions" => $data_transaction,
            "transaction_name" => $transaction_name
        ]; 

        $pdf = Pdf::loadView('pdf.report', $data);
        return $pdf->stream('laporan.pdf'); 
    }
}
