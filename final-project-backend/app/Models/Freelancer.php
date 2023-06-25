<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Freelancer extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'status',
        'balance',
        'task_id',
        'rate'
    ];
    function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    function task()
    {
        return $this->hasOne(Tasks::class);
    }
}
