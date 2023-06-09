<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
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
       
        $user = User::create($request->all());
        $this->save_image($request->profilePic, $user);
        return new UserResource($user);
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
