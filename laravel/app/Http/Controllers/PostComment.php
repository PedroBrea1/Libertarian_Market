<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Stabla;
use App\Post;
use Illuminate\Support\Facades\Hash;

class PostComment extends Controller
{
    function save5(Request $req)
    {

        $a = "0";

        $comment = new Post;
        $comment->parent_comment_id = $req->comment_id;
        $comment->comment = $req->message;
        $comment->comment_sender_name = $req->username;

        if ($req['username'] == "" or $req['message'] == "") {
            
        } else{
           $comment->save(); 
           $a = "1";
        }

        echo $a;
        
    }

    function retrieve()
    {
        $result = DB::connection('mysql2')->table('article_1')->get();

        return view('blog/articles/india-the-sleeping-giant', ['result' => $result]);
        //return view('v-marketplace/search', ['cups' => $cups, 'search' => $query]);

    }
}
