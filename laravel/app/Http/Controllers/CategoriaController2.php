<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Consulta;
use App\Consulta2;

use DB;
use Validator;

class CategoriaController extends Controller
{

    function savenewsletter(Request $req)
    {

        $a = "0";

        $req->validate([
            
            'username' => ['required','string','max:255','regex:/^[A-Za-z0-9 ]+$/'],
            'email' => 'required|email',

        ]);      

        //print_r($req->input());
        $consulta = new Consulta2;
        $consulta->username = $req->username;
        $consulta->email = $req->email;

        if ($req['username'] == "" or $req['email'] == "") {
            $a = "0";
        } else{
           $consulta->save(); 
           $a = "1";
        }

        echo $a;
        
    }

     



}
