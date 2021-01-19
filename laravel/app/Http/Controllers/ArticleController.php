<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Article1Post;
use App\Article2Post;
use App\Article3Post;
use App\Article4Post;

class ArticleController extends Controller
{

    function post_article_1(Request $req)
    {

        $a = "0";

        $comment = new Article1Post;
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

    function recieve_article_1()
    {
        $result = DB::connection('mysql2')->table('article_1')->get();

        return view('blog/articles/india-the-sleeping-giant', ['result' => $result]);
        
    }




    function post_article_2(Request $req)
    {

        $a = "0";

        $comment = new Article2Post;
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

    function recieve_article_2()
    {
        $result = DB::connection('mysql2')->table('article_2')->get();

        return view('blog/articles/the-social-response-to-the-covid-crisis', ['result' => $result]);
        
    }

    function post_article_3(Request $req)
    {

        $a = "0";

        $comment = new Article3Post;
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

    function recieve_article_3()
    {
        $result = DB::connection('mysql2')->table('article_3')->get();

        return view('blog/articles/masks-evidence', ['result' => $result]);
        
    }

    function post_article_4(Request $req)
    {

        $a = "0";

        $comment = new Article4Post;
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

    function recieve_article_4()
    {
        $result = DB::connection('mysql2')->table('article_4')->get();

        return view('blog/articles/labor-law-reform', ['result' => $result]);
        
    }
}
