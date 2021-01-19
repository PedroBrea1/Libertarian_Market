<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $connection = 'mysql2';

    protected $table = 'article_1';

    public $timestamps =false;
}
