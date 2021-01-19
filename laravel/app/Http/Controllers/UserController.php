<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;


class UserController extends Controller
{
    /*public function show($id){
    	return 'User ID' . $id;
    }*/
    public function saludo(){
    	return view('users', ['name' => 'Jose2']);
    }
    public function show2($name){

    	//1
    	//$user = \DB::table('users')->where('name', $name)->first();
    	/*if(!$user){
    		abort(404);
    	}*/

    	//2	
    	/*$user=User::where('name', $name)->firstOrFail();
    	return view('users', ['user'=>$user]);*/

    	//3
    	return view('users', ['user'=>User::where('name', $name)->firstOrFail()]);

    }
}