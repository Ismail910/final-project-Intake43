<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'staff_level_id',
        'task_id',
        'deductions'
    ];

    function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }

    function tasks(){
        return $this->hasMany(Tasks::class);
    }
    
    function staff_level()
    {
        return $this->belongsTo(staff_levels::class);
    }

}
