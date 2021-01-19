<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use DB;
use App\NewsletterModel;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;

class Newsletter extends Controller
{
    public function post(Request $req)
    {
               
        $a = "0";

        
        
        $validate = $this->validate($req, [

            'username' => ['required','string','max:255','regex:/^[A-Za-z0-9 ]+$/'],
            'email' => 'required|email',

        ]);

        /*
        if ($validate->fails()) {
                this->throwValidationException($request, $validator);;
            }
        */
        


        /*
        $validateData = $req->validate([
            
            'username' => 'required|min:6',
            'email' => 'required|email'

        ]);
        
        */

        /*

        $validator = Validator::make($request->all(), [
            'title' => ['required','string','max:255','regex:/^[A-Za-z0-9 ]+$/'],
            'body' => 'required|email',
        ]);

        if ($validator->fails()) {
            return redirect('register2')
                        ->withErrors($validator)
                        ->withInput();
        }
    
        */
        

        $consulta = new NewsletterModel;
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
}
