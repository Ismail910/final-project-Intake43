<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserResource;
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
    public function store(StoreUserRequest $request)
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
      
            return response()->json([
                'success' =>true,
                'manager' =>$manager,
                'token'  =>$token
            ], 201);
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
// =======
       
//         $user = User::create($request->all());
//         $this->save_image($request->profilePic, $user);
//         return new UserResource($user);
// >>>>>>> d5e3fa259f50db459b4f4db98026b0794dfe445f
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        if ($user){
           
            return  new UserResource($user);  #
        }
        return  new Response('', 205);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $old_image=  $user->profilePic;
        $user->update($request->all());
        $this->save_image($request->profilePic, $user);
        if($request->profilePic){
            $this->delete_image($old_image);
        }

//        return new Response($user, '200');
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

    private function save_image($image, $article){
        if ($image){
            $image_name = time().'.'.$image->extension();
            $image->move(public_path('images/users'),$image_name);
            $article->image = $image_name;
            $article->save();
        }
    }
    private  function  delete_image($image_name){
        if($image_name !='user.png' and ! str_contains($image_name, '/tmp/')){
            try{
                unlink(public_path('images/users/'.$image_name));

            }catch (\Exception $e){
                echo $e;
            }
        }
    }
}
