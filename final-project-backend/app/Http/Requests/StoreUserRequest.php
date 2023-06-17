<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
            'name' => 'required|string|max:55',
            'email' => 'required|string|unique|max:255',
            'password' => 'required|string',
            'nationalID' => 'required|number',
            'phone' => 'required|string',
            'address' => 'required|string',
            'joinedDate'=> 'required|date',
            'endDate'=> 'required|date|after:joinedDate',
            'profilePic'=> 'required|string',
        ];
    }
}
