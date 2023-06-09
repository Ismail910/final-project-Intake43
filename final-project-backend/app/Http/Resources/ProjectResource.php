<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
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
            'name' => $this->project_title,
            'description' => $this->project_description,
            'type' => $this->project_type,
            'start' => $this->project_start->toIso8601String(),
            'end' => $this->project_end->toIso8601String(),
            'status'=>$this->status,
            'productOnwer'=>[
                'name'=>$this->ProductOwner_id->user->name,
                'email'=>$this->ProductOwner_id->user->email,
            ],
            'ProductManager'=>[
                'name'=>$this->ProductManager_id->user->name,
                'email'=>$this->ProductManager_id->user->email,
            ],
            'client'=>[
                'name'=>$this->client_id->user->name,
                'email'=>$this->client_id->user->email,
            ]
        ];
    }
}
