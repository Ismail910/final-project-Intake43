<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Http\Requests\StoreProjectAPIRequest;
use App\Http\Requests\UpdateProjectAPIRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        try{
            $projects = Project::all();
            return ProjectResource::collection($projects);
        }
        catch(ModelNotFoundException $e){
            return response()->json([
                'error' => 'not found projects'
            ], 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectAPIRequest $request)
    {
        //
        $project = Project::create($request->all());
        return new ProjectResource($project);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $project = Project::findOrFail($id);
            return new ProjectResource($project);
        } catch (ModelNotFoundException $exception) {
            return response()->json(['error' => 'Project not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectAPIRequest $request, string $id)
    {
        //
       try{
            $project = Project::findOrFail($id);
            $project->update($request->all());

            return new ProjectResource($project);
       }
       catch(ModelNotFoundException $e){
            return response()->json([
                'error' => 'check if project is exist and check it is validation'
            ], 404);
       }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        try{
            $project = Project::findOrFail($id);
            $project->delete();
            return response()->json([$project], 204);
        }
        catch(ModelNotFoundException $e){
            return response()->json([
                'error' => 'check if project is exist '
            ], 404);
        }
    }
}
