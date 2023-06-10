<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $perPage = $request->per_page ? $request->per_page : 10;
        // $currentPage = $request->current_page ? $request->current_page : 1;
        // $users = User::paginate($perPage, ["*"], "page", $currentPage);
        // $response = new APIPaginateCollection($users, ProductResource::class);
        // return response()->json($response);
        return User::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       
        return User::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
