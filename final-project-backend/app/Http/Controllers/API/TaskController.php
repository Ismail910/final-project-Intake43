<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use Illuminate\Http\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;


class TaskController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'checkUser:Product Manager,Admin'])->only('store', 'destroy', 'update');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            return TaskResource::collection(Task::all());
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'error' => 'not found Tasks'
            ], 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        //
        $task = Task::create($request->all());
        return new TaskResource($task);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        try {
            return new TaskResource(Task::where(['id' => $task->id])->get());
        } catch (ModelNotFoundException $exception) {
            return response()->json(['error' => 'Tasks not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {

        try {
            $task->update($request->all());
            return new TaskResource($task);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'error' => 'check if Tasks is exist and check it is validation'
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        try {
            $task->delete();
            return new Response('', 204);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'error' => 'check if Tasks is exist '
            ], 404);
        }
    }
}
