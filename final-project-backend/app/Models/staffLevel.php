<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class staffLevel extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'salary'
    ];

    function managger(){
        return $this->hasMany(managers::class);
    }

}
