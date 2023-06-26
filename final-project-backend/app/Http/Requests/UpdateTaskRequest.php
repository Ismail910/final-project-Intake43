<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use App\Rules\ProductManagerValidationRule;

class UpdateTaskRequest extends FormRequest
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
            'project_id' => 'sometimes|required|exists:projects,id',
            'product_manager_id' => ['sometimes', 'required', 'exists:managers,id', new ProductManagerValidationRule],
            'task_title' => 'sometimes|required|string|max:255',
            'task_description' => 'sometimes|required|string|max:255',
            'task_start' => 'sometimes|required|date',
            'task_end' => 'required|date|after:task_start',
            'task_status' => 'sometimes|required|in:new,in_progress,completed',
        ];
    }

    public  function  failedValidation(Validator $validator)
    {
        throw  new HttpResponseException(
            response()->json(
                [
                    'success' => false,
                    "message" => "Error in Task Update validation",
                    "data" => $validator->errors()
                ],
                400

            )
        );
    }
}
