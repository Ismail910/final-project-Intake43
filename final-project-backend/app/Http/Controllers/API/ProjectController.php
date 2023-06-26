<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Models\Manager;
use App\Models\Client;

use App\Http\Requests\StoreProjectAPIRequest;
use App\Http\Requests\UpdateProjectAPIRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum','checkUser:Product Owner,Client'])->only('store');
        $this->middleware(['auth:sanctum','checkUser:Product Owner,Client,Admin,Product Manager'])->only('searchProjectByStatus');
        $this->middleware(['auth:sanctum','checkUser:Product Owner,Client,Admin,Product Manager'])->only('searchProjectByUsers');

    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        try {
            $projects = Project::all();
            return ProjectResource::collection($projects);
        } catch (ModelNotFoundException $e) {
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
        try {
            $project = Project::findOrFail($id);
            $project->update($request->all());

            return new ProjectResource($project);
        } catch (ModelNotFoundException $e) {
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
        try {
            $project = Project::findOrFail($id);
            $project->delete();
            return response()->json([$project], 204);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'error' => 'check if project is exist '
            ], 404);
        }
    }
    public function searchProjectByStatus($status)
    {
        $searchTerm = $status;

        $results = [];
        if (!Auth::user()) {
            return response()->json([
                'error' => 'unauthentecation'
            ], 404);
        }
        $id = Auth::user()->id;
        if (Auth::user()->role == 'Admin') {
            // Perform your search logic based on the provided search term
            $results = Project::where('project_status', '=', $searchTerm)->get();
        } elseif (Auth::user()->role == 'Product Manager') {
            $manager = Manager::where('user_id', $id)->first();
            $results = Project::where([
                ['ProductManager_id', '=', $manager->id],
                ['project_status', '=', $searchTerm]
            ])->get();
        } elseif (Auth::user()->role == 'Product Owner') {
            $owner = Manager::where('user_id', $id)->first();
            $results = Project::where([
                ['ProductOwner_id', '=', $owner->id],
                ['project_status', '=', $searchTerm]
            ])->get();
        } elseif (Auth::user()->role == 'Client') {
            $client = Client::where('user_id', $id)->first();
            $results = Project::where([
                ['client_id', '=', $client->id],
                ['project_status', '=', $searchTerm],
            ])->get();
        } else {
            return response()->json([
                'error' => 'Not found project with this status'
            ], 404);
        }
        return response()->json($results);
    }
    public function searchProjectByUsers()
    {
        
        $results=[];
        if(!Auth::user()){
            return response()->json([
                'error' => 'unauthentecation'
            ], 404);
        }
        $id=Auth::user()->id;
        if(Auth::user()->role=='Admin'){
            // Perform your search logic based on the provided search term
            $results = Project::all();
        }elseif(Auth::user()->role=='Product Manager'){
            $manager=managers::where('user_id',$id)->first();
            $results = Project:: where([
                ['ProductManager_id', '=', $manager->id],
            ])->get();
        }
        elseif(Auth::user()->role=='Product Owner'){
            $results = Project:: where([
                ['ProductOwner_id', '=', $owner->id],
            ])->get();
           

        }elseif(Auth::user()->role=='Client'){
            $results = Project:: where([
                ['client_id', '=', $client->id],
            ])->get();
        }else{
            return response()->json([
                'error' => 'Not found project to this user'
            ], 404);
        }
        return response()->json($results);
    }
    public function countProject(){
        $count= Project::count();
        return response()->json([
            'countProject' => $count
        ], 200);
    }
}
