<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\User;
use App\Models\managers;
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
            'start' => $this->project_start,
            'end' => $this->project_end,
            'status'=>$this->project_status,
            'productOnwer'=>[
                'name'=>$this->ProductOwner->user->name,
                'email'=>$this->ProductOwner->user->email,
            ],
            'ProductManager'=>[
                'name'=>$this->ProductManager->user->name,
                'email'=>$this->ProductManager->user->email,
            ],
            'client'=>[
                'name'=>$this->client->user->name,
                'email'=>$this->client->user->email,
            ]
        ];
    }
}
