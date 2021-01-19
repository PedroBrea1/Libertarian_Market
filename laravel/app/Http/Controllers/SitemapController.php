<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Article;
use App\Category;
use App\Question;
use App\Tag;

class SitemapController extends Controller
{
    public function index()
    {
      $articles = Article::all()->first();
      $categories = Category::all()->first();
      $questions = Question::all()->first();
      $tags = Tag::all()->first();

      return response()->view('sitemap.index', [
          'articles' => $articles,
          'categories' => $categories,
          'questions' => $questions,
          'tags' => $tags,
      ])->header('Content-Type', 'text/xml');
    }

    public function articles()
    {
        $articles = Article::latest()->get();
        return response()->view('sitemap.articles', [
            'articles' => $articles,
        ])->header('Content-Type', 'text/xml');
    }

    public function categories()
    {
        $categories = Category::all();
        return response()->view('sitemap.categories', [
            'categories' => $categories,
        ])->header('Content-Type', 'text/xml');
    }

    public function questions()
    {
        $questions = Question::latest()->get();
        return response()->view('sitemap.questions', [
            'questions' => $questions,
        ])->header('Content-Type', 'text/xml');
    }

    public function tags()
    {
        $tags = Tag::all();
        return response()->view('sitemap.tags', [
            'tags' => $tags,
        ])->header('Content-Type', 'text/xml');
    }
}