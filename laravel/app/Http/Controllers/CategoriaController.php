<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use DB;
use App\Consulta;
use App\Consulta2;
use App\Categoria;
use App\Stabla;
use Validator;
use Illuminate\Support\Facades\Hash;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;

class CategoriaController extends Controller
{

    public function store(Request $request){

    	$a = "0";

    	$data = request()->except(['token']);

    	$save = Consulta::insert($data);

    	if($save){

    		$a = "1";

    	} else {
    		$a = "0";
    	}

        echo $a;   	

    }

    function save(Request $req)
    {

        $a = "0";

        $req->validate([
            
            'name' => ['required','string','max:255','regex:/^[A-Za-z0-9 ]+$/'],
            'phone' => 'required|numeric',
            'email' => 'required|email',
            'messager' => ['required','string', 'min:10','max:500','regex:/^[A-Za-z0-9 ]+$/'],

        ]);      

        //print_r($req->input());
        $consulta = new Consulta;
        $consulta->name = $req->name;
        $consulta->phone = $req->phone;
        $consulta->email = $req->email;
        $consulta->messager = $req->messager;

        if ($req['name'] == "" or $req['email'] == "" or $req['phone'] == "" or $req['messager'] == "" ) {
            
        } else{
           $consulta->save(); 
           $a = "1";
        }

        echo $a;
        
    }

    function savenewsletter(Request $req)
    {

        $a = "0";

        $req->validate([
            
            'username' => ['required','string','max:255','regex:/^[A-Za-z0-9 ]+$/'],
            'email' => 'required|email',

        ]);      

        $consulta = new Consulta2;
        $consulta->username = $req->username;
        $consulta->email = $req->email;

        if ($req['username'] == "" or $req['email'] == "") {
            $a = "0";
        } else{
           $consulta->save(); 

           Mail::to($consulta->email)->send(new WelcomeMail());

           $a = "1";
        }

        echo $a;
        
    }

     function retrieve()
    {
         $users = DB::table('users')->select('id','name','email')->get();

        return view('business')->with('users', $users);

    }

    function retrieve2(Request $request)
    {       

        $request->validate([
            
            'search' => ['required','string','max:255','regex:/^[A-Za-z0-9 ]+$/'],

        ]); 

        //Si alguien hace una request entonces
        if($request){
            $query = trim($request->get('search'));
            //vamos a buscar un usuario donde el nombre del usuario (con LIKE decimos que sea igual) sea igual a lo que el usuario escribio en el formulario ( %: ya sea que empiece al inicio o al final)
            $cups = DB::table('cups')->where('title', 'LIKE', '%' . $query . '%')
            ->orderBy('id', 'asc')
            ->get();

            return view('v-marketplace/search', ['cups' => $cups, 'search' => $query]);
        }
    }


    function save3(Request $req)
    {

        $a = "0";
        
        $req->validate([
            
            'name' => ['required','string','max:255','regex:/^[A-Za-z0-9 ]+$/'],
            'email' => 'required|email',
        ]);      
        
        //print_r($req->input());
        $user = new Categoria;        
        $user->name = $req->name;
        $user->email = $req->email;
        $user->password = Hash::make($req->password);

        if ($req['name'] == "" or $req['email'] == "" or $req['password'] == "") {
            
        } else{
           $user->save(); 
           $a = "1";
        }

        echo $a;
        
    }

    function save5(Request $req)
    {

        $a = "0";
        
        $user = new Stabla;        
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
