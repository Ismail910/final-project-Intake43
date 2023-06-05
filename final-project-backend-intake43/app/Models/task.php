<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use App\Enums\statusTask;
class task extends Model
{
    public $table = "tasks";
    protected $fillable = ['name', 'description', 'type', 'startDate','endDate','status',
                            'priority', 'release','product_manager','employee'];

    protected $casts = [
        'status' => statusTask::class,
    ];
    use HasFactory;
    function  user(){
        return $this->belongsTo(User::class);
    }
}
