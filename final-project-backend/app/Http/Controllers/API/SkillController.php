<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use Illuminate\Http\Response;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Skill::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSkillRequest $request)
    {
        //
        $skill = Skill::create($request->all());
        return $skill;
    }

    /**
     * Display the specified resource.
     */
    public function show(Skill $skill)
    {
        return Skill::where(['id' => $skill->id])->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSkillRequest $request, Skill $skill)
    {
        $skill->update($request->all());
        return $skill;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Skill $skill)
    {

        $skill->delete();
        return new Response('', 204);
    }
}
