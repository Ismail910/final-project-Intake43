<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->task_title,
            'description' => $this->task_description,
            'start' => $this->task_start,
            'end' => $this->task_end,
            'status' => $this->task_status,
            'productManager' => [
                'name' => $this->ProductManager->user->name,
                'email' => $this->ProductManager->user->email,
            ],
        ];
    }
}
