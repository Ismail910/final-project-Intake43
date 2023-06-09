<?php

namespace App\Http\Controllers\API;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Models\Managers;
use Illuminate\Http\Request;

class ManagersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Managers::all();
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
    public function show(Managers $manager)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Managers $manager)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Managers $manager)
    {
        $manager->delete();
        return new Response('', 204);
    }

    private function save_image($image , $manager){
        if($image){
            $image_name = time().'.'.$image->extension();
            $image->move(public_path('images/Managers'),$image_name);
            $manager->image = $image_name;
            $manager->save();
        }
    }


}
