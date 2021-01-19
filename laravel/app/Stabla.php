<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stabla extends Model
{
    protected $connection = 'mysql';

    protected $table = 'feedback';

    public $timestamps =false;
}
