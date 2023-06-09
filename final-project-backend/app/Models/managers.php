<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class managers extends Model
{
    use HasFactory;

    function user()
    {
        return $this->belongsTo(User::class);
    }
    function staff_level()
    {
        return $this->belongsTo(staff_levels::class);
    }
    function project(){
        return $this->hasMany(Project::class);
    }
}