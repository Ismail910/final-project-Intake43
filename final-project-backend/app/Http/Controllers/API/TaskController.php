<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use Illuminate\Http\Response;


class TaskController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'checkUser:Product Manager,Employee,Freelancer,Admin']);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Task::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        //
        $task = Task::create($request->all());
        return $task;
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return Task::where(['id' => $task->id])->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->update($request->all());
        return $task;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {

        $task->delete();
        return new Response('', 204);
    }
}
