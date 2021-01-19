<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewsletterModel extends Model
{
    protected $connection = 'mysql';
    protected $table ='newsletter';
    public $timestamps =false;
    protected $fillable = [
        'username',
        'email',
    ];
}
