<?php

namespace App\Http\Controllers;

use App\Models\managers;
use App\Http\Requests\StoremanagersRequest;
use App\Http\Requests\UpdatemanagersRequest;

class ManagersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoremanagersRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(managers $managers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(managers $managers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatemanagersRequest $request, managers $managers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(managers $managers)
    {
        //
    }
}
