<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
            'role' => 'sometimes|in:Admin,ProductManager,ProductOwner,Freelancer,Client,Employee',
            'nationalID' => 'required|string|min:14',
            'address' => 'required|string',
            'phone' => 'required|string|min:11',
            'joinedDate' => 'required|date',
            'endDate' => 'required|date|after:joinedDate',
            'profilePic' => 'nullable',
            'country' => 'required'
        ];
    }
    ## add new function failed validation
    public  function  failedValidation(Validator $validator)
    {
        //        parent::failedValidation($validator); // TODO: Change the autogenerated stub
        throw  new HttpResponseException(
            response()->json(
                [
                    'success' => false,
                    "message" => "validation project errors",
                    "data" => $validator->errors()
                ],
                400

            )
        );
    }
}
