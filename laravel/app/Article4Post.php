<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article4Post extends Model
{
    protected $connection = 'mysql2';

    protected $table = 'article_4';

    public $timestamps =false;
}
