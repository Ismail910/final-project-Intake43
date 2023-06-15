<?php

use App\Http\Controllers\API\FreelancerController;
use App\Http\Controllers\API\ManagersController;

use App\Http\Controllers\API\SearchٍController;
use App\Http\Controllers\API\StaffLevelController;
use App\Http\Controllers\API\UserController;
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
use App\Http\Controllers\API\ProjectController;

Route::apiResource('projects', ProjectController::class);

Route::apiResource('user', UserController::class);

// Route::post('managers', [ManagersController::class, 'store'])->name('managers.store');
Route::apiResource('management', ManagersController::class );
Route::apiResource('freelancer', FreelancerController::class);
Route::apiResource('salary', StaffLevelController::class);

use App\Http\Controllers\LoginController;

Route::post('/login', [LoginController::class, 'login']);

Route::get('/search', [ SearchٍController::class, 'searchByName'])->name('search');
