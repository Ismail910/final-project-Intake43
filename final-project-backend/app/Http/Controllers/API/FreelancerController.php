<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFreelancerRequest;
use App\Http\Requests\UpdateFreelancerRequest;
use App\Http\Resources\FreelancerResource;
use App\Models\Freelancer;
use Illuminate\Database\Eloquent\ModelNotFoundException;

use Illuminate\Http\Response;

class FreelancerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            $client = Freelancer::all();
            return FreelancerResource::collection($client);
        }
        catch(ModelNotFoundException $e){
            return response()->json([
                'error' => 'not found freelancer collection',
            ], 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFreelancerRequest $request)
    {
        $salary = Freelancer::create($request->all());
        return new FreelancerResource($salary);
    }

    /**
     * Display the specified resource.
     */
    public function show(Freelancer $freelancer)
    {
        if ($freelancer){
            return  new FreelancerResource($freelancer);  
        }
        return  new Response('', 205);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFreelancerRequest $request, Freelancer $freelancer)
    {
        try {
            $freelancer->update($request->all());
            return new FreelancerResource($freelancer);
         } catch(ModelNotFoundException $e){
            return response()->json([
                'error' => 'check if freelancer is exist and check it is validation'
            ], 404);
       }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Freelancer $freelancer)
    {
        $freelancer->delete();
        return new Response('', 204);
    }
}
