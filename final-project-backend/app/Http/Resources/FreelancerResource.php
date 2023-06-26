<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FreelancerResource extends JsonResource
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
            'rate' => $this->rate,
            'status' => $this->status,
            'user' => new UserResource($this->user),
             'salayre'=>[
                'salary-class'=>$this->staff_levels->name,
                'salary'=>$this->staff_levels->salary
            ],
            // 'task'=>[
            //     'title'=>$this->task->task_title,
            //     'description'=>$this->task->task_description,
            //     'status'=>$this->task->task_status,
            // ]
        ];
    }
}
