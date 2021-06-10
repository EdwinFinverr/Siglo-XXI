<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;
    protected $guarded = ['id', 'created_at' ,'updated_at'];
    public function album(){
        $this->hasMany(Album::class);
    }
}
