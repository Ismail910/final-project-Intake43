<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Models\User;
class LoginController extends Controller
{
    //
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // if (!Auth::attempt($credentials)) {
        //     return response()->json([
        //         'error' => 'email or password has error'
        //     ], 404);
        // }

        $user=User::where('email',$request->email)->first();
        if($user&&Hash::check($request->password,$user->password)){
            $deviceName=$request->post('device_name',$request->userAgent());
            $token = $user->createToken($deviceName,['user_id' => $user->id, 'email' => $user->email,'name'=>$user->name,'role'=>$user->role])->plainTextToken;
            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
            ],201);
        }
        
        return response()->json([
            'error'=>'token not created',
        ],401);
    }



}
