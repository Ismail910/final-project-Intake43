<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\managers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $perPage = $request->per_page ? $request->per_page : 10;
        // $currentPage = $request->current_page ? $request->current_page : 1;
        // $users = User::paginate($perPage, ["*"], "page", $currentPage);
        // $response = new APIPaginateCollection($users, ProductResource::class);
        // return response()->json($response);
        return User::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
            'role' => 'required|in:Admin,Product Manager,Product Owner,Freelancer,Client,Employee',
            'nationalID' => 'required|string',
            'address' => 'required|string',
            'phone' => 'required|string|min:11',
            'joinedDate' => 'required|date',
            'endDate' => 'required|date|after:joinedDate',
            'profilePic' => 'nullable|string',
        ]);
        
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'role' => $request->input('role'),
            'nationalID'=>$request->input('nationalID'),
            'address' => $request->input('address'),
            'phone'=> $request->input('phone'),
            'joinedDate' => $request->input('joinedDate'),
            'endDate'=> $request->input('endDate'),
            'profilePic' => $request->input('profilePic'),
        ]);
        
        $token = $user->createToken('token-name',['user_id' => $user->id, 'email' => $user->email])->plainTextToken;
        // return User::create($request->all());
        if($request->input('role')=='Admin'){
            return redirect()->route('management.store', ['user_id' => $user->id,'role'=>'Admin']);
        }
        elseif($request->input('role')=='Product Manager'){
            $manager = managers::create([
               'user_id'=> $user->id,
               'role' => $request->input('role'),
               'staff_level_id'=>$request->input('staff_level_id'),
            ]);
      
        return $manager;
            // return redirect()->route('managers.store', ['user_id' => $user->id,'role'=>'Product Manager','staff_level_id'=>1])->withInput();;
        }
        elseif($request->input('role')=='Product Owner'){
            return redirect()->route('management.store', ['user_id' => $user->id,'role'=>'Product Owner']);
        }
        elseif($request->input('role')=='Freelancer'){
            return redirect()->route('freelancer.store', ['user_id' => $user->id]);
        }
        // elseif($request->input('role')=='Client'){
        //     return redirect()->route('freelancer.store', ['user_id' => $user->id]);
        // }
         // elseif($request->input('role')=='Employee'){
        //     return redirect()->route('freelancer.store', ['user_id' => $user->id]);
        // }

         return response()->json(['error' => 'faild create user'], 404);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
