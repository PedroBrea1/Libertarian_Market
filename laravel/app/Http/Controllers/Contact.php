<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use DB;
use App\ContactForm;

class Contact extends Controller
{
    function post(Request $req)
    {
    	$a = "0";

        $validate = $this->validate($req, [

            'name' => ['required','string','max:255','regex:/^[A-Za-z0-9 ]+$/'],
            'email' => 'required|email',
            'type' => 'required',
            'messager' => ['required','string', 'min:10','max:500','regex:/^[A-Za-z0-9 ]+$/'],

        ]);
        
        $user = new ContactForm;        
        $user->name = $req->name;
        $user->email = $req->email;
        $user->type = $req->type;
        $user->messager = $req->messager;

        if ($req['name'] == "" or $req['email'] == "" or $req['messager'] == "") {
            
        } else{
           $user->save(); 
           $a = "1";
        }

        echo $a;
    }
}
