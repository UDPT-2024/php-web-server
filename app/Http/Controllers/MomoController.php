<?php

namespace App\Http\Controllers;
use Inertia\Inertia;


class MomoController extends Controller
{
    public function show($id)
    {

        // Trả về view và truyền dữ liệu sự kiện
        return Inertia::render('MomoPayment/MomoPayment', [
            'eventId' => $id,
        ]);
    }
}
