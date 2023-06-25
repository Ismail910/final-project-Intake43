<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\managers;
use App\Models\Project;
class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id',
        'product_manager_id',
        'task_title',
        'task_description',
        'task_start',
        'task_end',
        'task_status'
    ];

    function project()
    {
        return $this->belongsTo(Project::class);
    }

    function ProductManager()
    {
        return $this->belongsTo(managers::class,'product_manager_id','id');
    }
}
