<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Skill;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
class SearchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   
public function searchByName($modelName, $keyword)
{
    try {
        $model = app("App\\Models\\$modelName");

        if($model == 'Skill'){
            // $results = user_skill::select('user_skill.*')
            // ->join('users', 'users.id', '=', 'user_skill.user_id')
            // ->join('skills', 'skills.id', '=', 'user_skill.skill_id')
            // ->where('users.name', 'LIKE', "%$keyword%")
            // ->where('skills.name', 'LIKE', "%$keyword%")
            // ->get();
            // return $results;

            $users = User::join('skills', 'users.id', '=', 'skills.user_id')
            ->where('skills.name', $keyword)
            ->select('users.*')
            ->get();

        return Response::json($users);
        }

        $results = $model->where('name', 'LIKE', "%$keyword%")->get();
        return $results;

    }  catch(ModelNotFoundException $e){
        return response()->json([
            'error' => 'check if this name is exist because not found this name',
        ], 404);
   }
}
}
