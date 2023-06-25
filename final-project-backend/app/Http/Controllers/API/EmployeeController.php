<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $emp = Employee::all();
            return EmployeeResource::collection($emp);
        } catch(ModelNotFoundException $e){
            return response()->json([
                'error' => 'not found Employee collection',
            ], 404);
        }

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $employee = Employee::create($request->all());
        return new EmployeeResource($employee);
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        if($employee){
            return  new EmployeeResource($employee);
        }
        return  new Response('', 205);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        try {
            $employee->update($request->all());
            return new EmployeeResource($employee);
        } catch(ModelNotFoundException $e){
            return response()->json([
                'error' => 'check it is validation'
            ], 404);

        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();
        return new Response('', 204);
    }
}
