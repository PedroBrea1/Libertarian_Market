<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article2Post extends Model
{
    protected $connection = 'mysql2';

    protected $table = 'article_2';

    public $timestamps =false;
}
