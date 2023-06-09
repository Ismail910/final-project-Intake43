<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\StaffLevelResource;
use App\Models\StaffLevel;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class StaffLevelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return StaffLevel::all();
        try{
            $manager = StaffLevel::all();
            return StaffLevelResource::collection($manager);
        }
        catch(ModelNotFoundException $e){
            return response()->json([
                'error' => 'not found mangers collection',
            ], 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(StaffLevel $staffLevel , User $salary_id)
    {
        return StaffLevel::where(['id' => $salary_id])->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, StaffLevel $staffLevel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StaffLevel $staffLevel)
    {
        //
    }
}
