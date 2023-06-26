<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Manager;
use App\Models\Employee;

class staffLevel extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'salary'
    ];

    function manager()
    {
        return $this->hasMany(Manager::class);
    }

    function employee()
    {
        return $this->hasMany(Employee::class);
    }
}
