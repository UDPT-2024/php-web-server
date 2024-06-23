<?php

namespace App\Http\Controllers;
use Inertia\Inertia;


class EventController extends Controller
{
    public function show($id)
    {

        // Trả về view và truyền dữ liệu sự kiện
        return Inertia::render('EventDetail/EventDetail', [
            'eventId' => $id,
        ]);
    }
}
