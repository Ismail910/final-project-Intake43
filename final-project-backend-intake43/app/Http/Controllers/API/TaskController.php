<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\task;
use App\Http\Resources\TaskResource;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return TaskResource::collection(task::all()); # is used when we want to return a collection of tasks
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoretaskRequest $request)
    {
        //
        $task=task::create($request->all());
        return response::json($task,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(task $task)
    {
        //
        if ($task){
            return  new TaskResource($task);  #we use new TaskResource($task) to create a single resource instance for that task.
        }
        return response::json(['message' => 'Task not found'], 205);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatetaskRequest $request,  task $task)
    {
        //
        $task->update($request->all());
        return  new TaskResource($task);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(task $task)
    {
        //
        $task->delete();
        // return response::json(['message' => 'Task Deleted'], 204);
        return new Response('Task deleted',204);
    }
}
