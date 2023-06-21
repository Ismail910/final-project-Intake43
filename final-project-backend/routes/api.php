<?php

use App\Http\Controllers\API\FreelancerController;
use App\Http\Controllers\API\ManagersController;

use App\Http\Controllers\API\SearchController;

use App\Http\Controllers\API\StaffLevelController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\TaskController;
use App\Http\Controllers\API\SkillController;
use App\Http\Controllers\Payment\CreditController;
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

Route::get('search', [SearchController::class, 'searchByName'])->name('search');

use App\Http\Controllers\API\ProjectController;

Route::get('projects/count', [ProjectController::class, 'countProject'])->name('countProject');
Route::apiResource('projects', ProjectController::class);
Route::get('projects/search/{status}', [ProjectController::class, 'searchProjectByStatus'])->name('projects.search');

Route::apiResource('tasks', TaskController::class);

Route::apiResource('skills', SkillController::class);


Route::get('user/count', [UserController::class, 'countUser'])->name('countUser');
Route::get('user/countCountry', [UserController::class, 'countUserCountry'])->name('countUserCountry');
Route::apiResource('user', UserController::class);

// Route::post('managers', [ManagersController::class, 'store'])->name('managers.store');
Route::apiResource('management', ManagersController::class);
Route::apiResource('freelancer', FreelancerController::class);
Route::apiResource('salary', StaffLevelController::class);

use App\Http\Controllers\LoginController;

Route::post('/login', [LoginController::class, 'login'])->name('login');



// use APP\Http\Controllers\API\payment\CreditController;
// // paymob
// Route::post('/credit', [CreditController::class, 'credit'])->name('credit');
// Route::get('/callback', [CreditController::class, 'callback'])->name('callback');

// Route::get('/search', [ SearchٍController::class, 'searchByName'])->name('search');
