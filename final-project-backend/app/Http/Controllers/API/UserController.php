<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\managers;
use App\Models\Freelancer;
use App\Models\client;
use App\Models\Employee;
use App\Models\Skill;
use Illuminate\Support\Facades\DB;
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
    public function store(StoreUserRequest $request)
    {

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'role' => $request->input('role'),
            'nationalID' => $request->input('nationalID'),
            'address' => $request->input('address'),
            'phone' => $request->input('phone'),
            'joinedDate' => $request->input('joinedDate'),
            'endDate' => $request->input('endDate'),
            'country' => $request->input('country'),
        ]);
        $this->save_image($request->profilePic, $user);

        $token = $user->createToken('token-name', ['user_id' => $user->id, 'email' => $user->email, 'name' => $user->name, 'role' => $user->role])->plainTextToken;

        if ($request->input('role') == 'Freelancer') {
            $freelancer = Freelancer::create([
                'user_id' => $user->id,
                'status' => false,
                'rate' => 1,
                'balance' => 0,
                'task_id' => null
            ]);

            return response()->json([
                'success' => true,
                'freelancer' => $freelancer,
                'token'  => $token
            ], 201);
        } elseif ($request->input('role') == 'Client') {
            $client = Client::create([
                'user_id' => $user->id,
                'balance' => 0,
            ]);

            return response()->json([
                'success' => true,
                'client' => $client,
                'token'  => $token
            ], 201);
            
        } elseif ($request->input('role') == 'Employee') {
            $employee = Employee::create([
                'user_id' => $user->id,
                'balance' => 0,
                'staff_level_id' => $request->input('staff_level_id'),
            ]);

            return response()->json([
                'success' => true,
                'employee' => $employee,
                'token'  => $token
            ], 201);
        } else {
            $manager = managers::create([
                'user_id' => $user->id,
                'role' => $request->input('role'),
                'staff_level_id' => $request->input('staff_level_id'),
            ]);


            return response()->json([
                'success' => true,
                'manager' => $manager,
                'token'  => $token
            ], 201);
            // return redirect()->route('managers.store', ['user_id' => $user->id,'role'=>'Product Manager','staff_level_id'=>1])->withInput();;
        }




        return response()->json(['error' => 'faild create user'], 404);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        if ($user) {
            return  new UserResource($user);  #
        }
        return  new Response('', 205);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(StoreUserRequest $request, User $user)
    {
        $old_image =  $user->profilePic;
        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'role' => $request->input('role'),
            'nationalID' => $request->input('nationalID'),
            'address' => $request->input('address'),
            'phone' => $request->input('phone'),
            'joinedDate' => $request->input('joinedDate'),
            'endDate' => $request->input('endDate'),
        ]);
        $this->save_image($request->profilePic, $user);
        if ($request->profilePic) {
            $this->delete_image($old_image);
        }
        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $this->delete_image($user->profilePic);
        $user->delete();
    }

    public function addSkillsToUser(Request $request)
    {
        $inserted = DB::table('user_skill')->insert([
            'user_id' => $request->input('user_id'),
            'skill_id' => $request->input('skill_id'),
        ]);
        return response()->json([
            'inserted' => $inserted
        ], 200);
    }


    public function countUser()
    {
        $count = User::count();
        return response()->json([
            'countUser' => $count
        ], 200);
    }
    public function countUserCountry()
    {
        $countryCount = User::distinct('country')->select(DB::raw('count(distinct country) as count'))
            ->first();
        return response()->json([
            'countryCount' => $countryCount->count
        ], 200);
    }
    private function save_image($image, $article)
    {
        if ($image) {
            $image_name = time() . '.' . $image->extension();
            $image->move(public_path('images/users'), $image_name);
            $article->profilePic = $image_name;
            $article->save();
        }
    }
    private  function  delete_image($image_name)
    {
        if ($image_name != 'user.png' and !str_contains($image_name, '/tmp/')) {
            try {
                unlink(public_path('images/users/' . $image_name));
            } catch (\Exception $e) {
                echo $e;
            }
        }
    }
}
