<?php

use App\Http\Controllers\API\FreelancerController;
use App\Http\Controllers\API\ManagersController;
use App\Http\Controllers\API\StaffLevelController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('user', UserController::class);
Route::apiResource('management', ManagersController::class );
Route::apiResource('frrelancer', FreelancerController::class);
Route::apiResource('salary', StaffLevelController::class);




