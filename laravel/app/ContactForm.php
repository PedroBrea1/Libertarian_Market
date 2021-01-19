<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactForm extends Model
{   

	protected $connection = 'mysql';

    protected $table = 'feedback';

    public $timestamps =false;
}
