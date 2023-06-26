<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Project;
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
   
// public function searchByName($modelName, $keyword , $projectType = null)
// {
//     try {
//         $users = [];
//         $model = app("App\\Models\\$modelName");
//         if($model == 'Skill'){
//             if ($projectType == 'mileStone') {
//                 $users = User::join('skills', 'users.id', '=', 'skills.user_id')
//                 ->where('skills.name', $keyword)
//                 ->where('user_role', 'Freelancer')
//                 ->select('users.*')
//                 ->get();
//             }else if($projectType == 'byProject'){
//                 $users = User::join('skills', 'users.id', '=', 'skills.user_id')
//                 ->where('skills.name', $keyword)
//                 ->where('user_role', 'Employee')
//                 ->select('users.*')
//                 ->get();
//             }else{
//                 $users = User::join('skills', 'users.id', '=', 'skills.user_id')
//                 ->where('skills.name', $keyword)
//                 ->select('users.*')
//                 ->get();
//             }
           
            
//             if(count( $users) > 0){
//                 return Response::json($users);
//             }else{
//                 return response()->json([
//                     'error' => 'not found any users having this skill',
//                 ], 404);
//             }
//         }else if($model == 'Project'){
           
//             $project = Project::where('project_title', 'LIKE', "%$keyword%")->get();
//             if($project){
//                 return Response::json($project);
//             }else{
//                 return response()->json([
//                     'error' => 'not found any project',
//                 ], 404);
//             }
//         }else{
//             $results = $model->where('name', 'LIKE', "%$keyword%")->get();
//             return Response::json($results);
//             if($results){
//                 return Response::json($results);
//             }else{
//                 return response()->json([
//                     'error' => 'not found results',
//                 ], 404);
//             }
//         }
//     }  catch(ModelNotFoundException $e){
//         return response()->json([
//             'error' => 'check if this name is exist because not found this name',
//         ], 404);
//    }
// }

public function searchByName($modelName, $keyword, $projectType = null)
{
    try {
        if ($modelName === 'Skill') {
            $users = User::join('skills', 'users.id', '=', 'skills.user_id')
                ->where('skills.name', $keyword)
                ->when($projectType === 'mileStone', function ($query) {
                    return $query->where('user_role', 'Freelancer');
                })
                ->when($projectType === 'byProject', function ($query) {
                    return $query->where('user_role', 'Employee');
                })
                ->select('users.*')
                ->get();

            if ($users->count() > 0) {
                return Response::json($users);
            } else {
                return response()->json([
                    'error' => 'No users found with this skill',
                ], 404);
            }
        } elseif ($modelName === 'Project') {
            $projects = Project::where('project_title', 'LIKE', "%$keyword%")->get();

            if ($projects->count() > 0) {
                return Response::json($projects);
            } else {
                return response()->json([
                    'error' => 'No projects found',
                ], 404);
            }
        } else {
            $model = app("App\\Models\\$modelName");
            $results = $model->where('name', 'LIKE', "%$keyword%")->get();

            if ($results->count() > 0) {
                return Response::json($results);
            } else {
                return response()->json([
                    'error' => 'No results found',
                ], 404);
            }
        }
    } catch (ModelNotFoundException $e) {
        return response()->json([
            'error' => 'The specified model was not found',
        ], 404);
    }
}


}
