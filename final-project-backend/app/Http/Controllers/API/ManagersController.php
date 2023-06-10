<?php

namespace App\Http\Controllers\API;
use App\Http\Requests\StoremanagersRequest;
use App\Http\Resources\ManagersResource;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Models\managers as Managers;
use Illuminate\Http\Request;

class ManagersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Managers::all();
        try{
            $manager = Managers::all();
            return ManagersResource::collection($manager);
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

    public function store(StoremanagersRequest $request)
    {  
        
        $manager = Managers::create($request->all());
      
        return $manager;
    }

    /**
     * Display the specified resource.
     */
    public function show(Managers $manager)
    {
        if ($manager){
           
            return  new ManagersResource($manager);  
        }
        return  new Response('', 205);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Managers $manager)
    {
        $manager = Managers::update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Managers $manager)
    {
        $manager->delete();
        return new Response('', 204);
    }

   

}
