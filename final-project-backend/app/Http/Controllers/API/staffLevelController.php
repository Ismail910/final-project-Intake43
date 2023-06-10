<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorestaffLevelRequest;
use App\Http\Requests\UpdatestaffLevelRequest;
use App\Http\Resources\StaffLevelResource;
use App\Models\StaffLevel;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;

use Illuminate\Http\Response;

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

    public function store(StorestaffLevelRequest $request)
    {
        $salary = StaffLevel::create($request->all());
        return new StaffLevelResource($salary);
    }

    /**
     * Display the specified resource.
     */

    public function show(StaffLevel $staffLevel , User $staff_level_id)
    {
        return StaffLevel::where(['id' => $staff_level_id])->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatestaffLevelRequest $request, StaffLevel $staffLevel)
    {
        $staffLevel->update($request->all());
       return  new StaffLevelResource($staffLevel);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StaffLevel $staffLevel)
    {
        $staffLevel->delete();
        return new Response('', 204);
    }
}
