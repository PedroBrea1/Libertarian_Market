<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article3Post extends Model
{
    protected $connection = 'mysql2';

    protected $table = 'article_3';

    public $timestamps =false;
}
