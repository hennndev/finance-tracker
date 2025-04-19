<?php

namespace App\Http\Controllers;

use App\Models\Income;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class PDFController extends Controller
{
    public function export()
    {
        $incomes = Income::all();
        $data = [ 
            'title' => 'Laporan PDF Laravel',
            "incomes" => $incomes
        ]; // contoh data

        $pdf = Pdf::loadView('pdf.report', $data);
        // return $pdf->download('laporan.pdf'); 
        return $pdf->stream('laporan.pdf'); 
    }
}
