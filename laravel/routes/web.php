<?php

use Illuminate\Support\Facades\Route;
use Spatie\Sitemap\SitemapGenerator;
use App\Http\Controllers\CategoriaController;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('marketplace');
});

Route::get('/marketplace', function () {
    return view('marketplace');
});

Route::view('/v-marketplace/search','v-marketplace/search');
Route::get('/v-marketplace/search', 'CategoriaController@retrieve2');



Route::get('/article1','ArticleController@recieve_article_1');
Route::post('/article1post','ArticleController@post_article_1');

Route::get('/article2','ArticleController@recieve_article_2');
Route::post('/article2post','ArticleController@post_article_2');

Route::get('/article3','ArticleController@recieve_article_3');
Route::post('/article3post','ArticleController@post_article_3');

Route::get('/article4','ArticleController@recieve_article_4');
Route::post('/article4post','ArticleController@post_article_4');


Route::view('/contact-request','contact-request');
Route::post('/contact-request','Contact@post');



Route::view('/newsletter-sign-up','newsletter-sign-up');
Route::post('/newsletter-sign-up','Newsletter@post');




Route::view('/return-request','return-request');

Route::view('/about','about');

Route::view('/libertarian-blog','libertarian-blog');





Route::view('/privacy-policy','privacy-policy');
Route::view('/terms-and-conditions','terms-and-conditions');

Route::view('/business','business');
Route::get('/business', 'CategoriaController@retrieve');

Route::view('/blog2','blog2');
Route::get('/blog2', 'CategoriaController@retrieve2');



Route::view('/register2','register2');
Route::post('/register2','CategoriaController@save3');



//Route::view('/article1','blog/articles/register5');


Route::get('/sitemap.xml', 'SitemapController@index');
Route::get('/sitemap.xml/articles', 'SitemapController@articles');
Route::get('/sitemap.xml/categories', 'SitemapController@categories');
Route::get('/sitemap.xml/questions', 'SitemapController@questions');
Route::get('/sitemap.xml/tags', 'SitemapController@tags');

Route::get('sitemap2',function(){

	SitemapGenerator::create('https://libertarianmarket.com/')->writeToFile('sitemap.xml');

	return 'sitemap created';
});

Route::get('/email', function () {

    Mail::to('email@email.com')->send(new WelcomeMail());

    return new WelcomeMail();
});

Route::view('/v-marketplace/CUPS-CONTENT-a11','v-marketplace/CUPS-CONTENT-a11');
Route::view('/v-marketplace/CUPS-aa','v-marketplace/CUPS-aa');
Route::view('/v-marketplace/CUPS-a11','v-marketplace/CUPS-a11');
Route::view('/v-marketplace/CUPS-a12','v-marketplace/CUPS-a12');
Route::view('/v-marketplace/CUPS-a13','v-marketplace/CUPS-a13');
Route::view('/v-marketplace/CUPS-a14','v-marketplace/CUPS-a14');
Route::view('/v-marketplace/CUPS-a15','v-marketplace/CUPS-a15');
Route::view('/v-marketplace/CUPS-a16','v-marketplace/CUPS-a16');
Route::view('/v-marketplace/CUPS-a17','v-marketplace/CUPS-a17');
Route::view('/v-marketplace/CUPS-a18','v-marketplace/CUPS-a18');
Route::view('/v-marketplace/CUPS-a19','v-marketplace/CUPS-a19');
Route::view('/v-marketplace/CUPS-a20','v-marketplace/CUPS-a20');
Route::view('/v-marketplace/CUPS-a21','v-marketplace/CUPS-a21');

Route::view('/v-marketplace/T-SHIRTS-WOMEN-CONTENT-a11','v-marketplace/T-SHIRTS-WOMEN-CONTENT-a11');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a11','v-marketplace/T-SHIRTS-WOMEN-a11');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a12','v-marketplace/T-SHIRTS-WOMEN-a12');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a13','v-marketplace/T-SHIRTS-WOMEN-a13');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a14','v-marketplace/T-SHIRTS-WOMEN-a14');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a15','v-marketplace/T-SHIRTS-WOMEN-a15');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a16','v-marketplace/T-SHIRTS-WOMEN-a16');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a17','v-marketplace/T-SHIRTS-WOMEN-a17');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a18','v-marketplace/T-SHIRTS-WOMEN-a18');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a19','v-marketplace/T-SHIRTS-WOMEN-a19');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a20','v-marketplace/T-SHIRTS-WOMEN-a20');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a21','v-marketplace/T-SHIRTS-WOMEN-a21');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a22','v-marketplace/T-SHIRTS-WOMEN-a22');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a23','v-marketplace/T-SHIRTS-WOMEN-a23');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a24','v-marketplace/T-SHIRTS-WOMEN-a24');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a25','v-marketplace/T-SHIRTS-WOMEN-a25');
Route::view('/v-marketplace/T-SHIRTS-WOMEN-a26','v-marketplace/T-SHIRTS-WOMEN-a26');

Route::view('/v-marketplace/T-SHIRTS-MEN-CONTENT-a11','v-marketplace/T-SHIRTS-MEN-CONTENT-a11');
Route::view('/v-marketplace/T-SHIRTS-MEN-a11','v-marketplace/T-SHIRTS-MEN-a11');
Route::view('/v-marketplace/T-SHIRTS-MEN-a12','v-marketplace/T-SHIRTS-MEN-a12');
Route::view('/v-marketplace/T-SHIRTS-MEN-a13','v-marketplace/T-SHIRTS-MEN-a13');
Route::view('/v-marketplace/T-SHIRTS-MEN-a14','v-marketplace/T-SHIRTS-MEN-a14');
Route::view('/v-marketplace/T-SHIRTS-MEN-a15','v-marketplace/T-SHIRTS-MEN-a15');
Route::view('/v-marketplace/T-SHIRTS-MEN-a16','v-marketplace/T-SHIRTS-MEN-a16');
Route::view('/v-marketplace/T-SHIRTS-MEN-a17','v-marketplace/T-SHIRTS-MEN-a17');
Route::view('/v-marketplace/T-SHIRTS-MEN-a18','v-marketplace/T-SHIRTS-MEN-a18');
Route::view('/v-marketplace/T-SHIRTS-MEN-a19','v-marketplace/T-SHIRTS-MEN-a19');
Route::view('/v-marketplace/T-SHIRTS-MEN-a20','v-marketplace/T-SHIRTS-MEN-a20');
Route::view('/v-marketplace/T-SHIRTS-MEN-a21','v-marketplace/T-SHIRTS-MEN-a21');
Route::view('/v-marketplace/T-SHIRTS-MEN-a22','v-marketplace/T-SHIRTS-MEN-a22');
Route::view('/v-marketplace/T-SHIRTS-MEN-a23','v-marketplace/T-SHIRTS-MEN-a23');
Route::view('/v-marketplace/T-SHIRTS-MEN-a24','v-marketplace/T-SHIRTS-MEN-a24');
Route::view('/v-marketplace/T-SHIRTS-MEN-a25','v-marketplace/T-SHIRTS-MEN-a25');

Route::view('/v-marketplace/TOWELS-CONTENT-a11','v-marketplace/TOWELS-CONTENT-a11');
Route::view('/v-marketplace/TOWELS-a11','v-marketplace/TOWELS-a11');
Route::view('/v-marketplace/TOWELS-a12','v-marketplace/TOWELS-a12');
Route::view('/v-marketplace/TOWELS-a13','v-marketplace/TOWELS-a13');
Route::view('/v-marketplace/TOWELS-a14','v-marketplace/TOWELS-a14');
Route::view('/v-marketplace/TOWELS-a15','v-marketplace/TOWELS-a15');
Route::view('/v-marketplace/TOWELS-a16','v-marketplace/TOWELS-a16');
Route::view('/v-marketplace/TOWELS-a17','v-marketplace/TOWELS-a17');
Route::view('/v-marketplace/TOWELS-a18','v-marketplace/TOWELS-a18');
Route::view('/v-marketplace/TOWELS-a19','v-marketplace/TOWELS-a19');

Route::view('/v-marketplace/FASHION-CONTENT-a11','v-marketplace/FASHION-CONTENT-a11');
Route::view('/v-marketplace/FASHION-a11','v-marketplace/FASHION-a11');
Route::view('/v-marketplace/FASHION-a12','v-marketplace/FASHION-a12');
Route::view('/v-marketplace/FASHION-a13','v-marketplace/FASHION-a13');
Route::view('/v-marketplace/FASHION-a14','v-marketplace/FASHION-a14');
Route::view('/v-marketplace/FASHION-a15','v-marketplace/FASHION-a15');
Route::view('/v-marketplace/FASHION-a16','v-marketplace/FASHION-a16');
Route::view('/v-marketplace/FASHION-a17','v-marketplace/FASHION-a17');
Route::view('/v-marketplace/FASHION-a18','v-marketplace/FASHION-a18');
Route::view('/v-marketplace/FASHION-a19','v-marketplace/FASHION-a19');
Route::view('/v-marketplace/FASHION-a20','v-marketplace/FASHION-a20');
Route::view('/v-marketplace/FASHION-a21','v-marketplace/FASHION-a21');
Route::view('/v-marketplace/FASHION-a22','v-marketplace/FASHION-a22');

Route::view('/v-marketplace/BAGS-CONTENT-a11','v-marketplace/BAGS-CONTENT-a11');
Route::view('/v-marketplace/BAGS-CONTENT-a12','v-marketplace/BAGS-CONTENT-a12');
Route::view('/v-marketplace/BAGS-CONTENT-a13','v-marketplace/BAGS-CONTENT-a13');
Route::view('/v-marketplace/BAGS-a11','v-marketplace/BAGS-a11');
Route::view('/v-marketplace/BAGS-a12','v-marketplace/BAGS-a12');
Route::view('/v-marketplace/BAGS-a13','v-marketplace/BAGS-a13');
Route::view('/v-marketplace/BAGS-a14','v-marketplace/BAGS-a14');
Route::view('/v-marketplace/BAGS-a15','v-marketplace/BAGS-a15');
Route::view('/v-marketplace/BAGS-a16','v-marketplace/BAGS-a16');
Route::view('/v-marketplace/BAGS-a17','v-marketplace/BAGS-a17');
Route::view('/v-marketplace/BAGS-a18','v-marketplace/BAGS-a18');
Route::view('/v-marketplace/BAGS-a11','v-marketplace/BAGS-a19');
Route::view('/v-marketplace/BAGS-a20','v-marketplace/BAGS-a20');
Route::view('/v-marketplace/BAGS-a21','v-marketplace/BAGS-a21');
Route::view('/v-marketplace/BAGS-a22','v-marketplace/BAGS-a22');
Route::view('/v-marketplace/BAGS-a23','v-marketplace/BAGS-a23');
Route::view('/v-marketplace/BAGS-a24','v-marketplace/BAGS-a24');
Route::view('/v-marketplace/BAGS-a25','v-marketplace/BAGS-a25');
Route::view('/v-marketplace/BAGS-a26','v-marketplace/BAGS-a26');
Route::view('/v-marketplace/BAGS-a27','v-marketplace/BAGS-a27');
Route::view('/v-marketplace/BAGS-a28','v-marketplace/BAGS-a28');
Route::view('/v-marketplace/BAGS-a29','v-marketplace/BAGS-a29');
Route::view('/v-marketplace/BAGS-a30','v-marketplace/BAGS-a30');
Route::view('/v-marketplace/BAGS-a31','v-marketplace/BAGS-a31');
Route::view('/v-marketplace/BAGS-a32','v-marketplace/BAGS-a32');
Route::view('/v-marketplace/BAGS-a33','v-marketplace/BAGS-a33');
Route::view('/v-marketplace/BAGS-a34','v-marketplace/BAGS-a34');
Route::view('/v-marketplace/BAGS-a35','v-marketplace/BAGS-a35');
Route::view('/v-marketplace/BAGS-a36','v-marketplace/BAGS-a36');
Route::view('/v-marketplace/BAGS-a37','v-marketplace/BAGS-a37');
Route::view('/v-marketplace/BAGS-a38','v-marketplace/BAGS-a38');
Route::view('/v-marketplace/BAGS-a39','v-marketplace/BAGS-a39');
Route::view('/v-marketplace/BAGS-a40','v-marketplace/BAGS-a40');
Route::view('/v-marketplace/BAGS-a41','v-marketplace/BAGS-a41');




Route::get('/test/env', function () {
    dd(env('DB_DATABASE')); // dump db variable value one by one
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
