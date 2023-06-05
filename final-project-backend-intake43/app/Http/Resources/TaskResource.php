<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;
class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $startDate = Carbon::parse($this->startDate);
        $endDate = Carbon::parse($this->endDate);

        $duration = $endDate->diffInDays($startDate);
        return [
            "name"=>$this->name,
            'description'=>$this->description, 
            'type'=>$this->type,
            'startDate'=>$this->startDate,
            'endDate'=>$this->endDate,
            'duration'=>$duration,
            'status'=>$this->status,
            'priority'=>$this->priority,
            'release'=>$this->release,
            'product_manager'=>[
                'name'=>$this->product_manager->name,
            ],
            'employee'=>[
                'name'=>$this->employee->name,
            ],
        ];
    }
}
