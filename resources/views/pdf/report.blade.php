<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Laporan Pemasukan</title>
    <style>
        body { font-family: sans-serif; font-size: 12px; }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #333;
            padding: 8px 5px;
            text-align: left;
        }
        th {
            background-color: #f0f0f0;
        }
        h2 {
            text-align: center;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h2>Laporan Data Pemasukan</h2>
    
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Kategori</th>
                <th>Jumlah</th>
                <th>Deskripsi</th>
                <th>Tanggal Transaksi</th>
            </tr>
        </thead>
        <tbody>
            @forelse ($incomes as $index => $income)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $income->name }}</td>
                    <td>{{ $income->category }}</td>
                    <td>Rp {{ number_format($income->amount, 0, ',', '.') }}</td>
                    <td>{{ $income->description }}</td>
                    <td>{{ \Carbon\Carbon::parse($income->transaction_date)->format('d-m-Y H:i') }}</td>
                </tr>
            @empty
                <tr>
                    <td colspan="6" style="text-align: center;">Tidak ada data</td>
                </tr>
            @endforelse
        </
