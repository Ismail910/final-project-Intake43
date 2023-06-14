<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   
public function searchByName($modelName, $keyword)
{
    try {
        $model = app("App\\Models\\$modelName");
        $results = $model->where('name', 'LIKE', "%$keyword%")->get();

        return $results;
    }  catch(ModelNotFoundException $e){
        return response()->json([
            'error' => 'check if this name is exist because not found this name',
        ], 404);
   }
}
}
