@extends('plantilla')

@section('content')

  <!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- Blog Entries Column -->
      <div class="col-md-8">

        <h1 class="my-4">Libertarian Market
          <small>BLOG</small>
        </h1>

        <!-- Blog Post -->
        <div class="card mb-4">
          <img class="card-img-top" src="blog/articles/images/flag-india.jpg" alt="Card image cap">
          <div class="card-body">
            <h2 class="card-title">India and the consolidation of Democracy in the Post Covid World</h2>
            <p class="card-text">In this article we will highlight the role and the significance that India can have in the following years. The key role that can have in the fact that the world economy continues being leaded by democratic countries. In other words, that the world economy maintains in the hands of their citizens.</p>
            <a href="article1" class="btn btn-primary">Read More &rarr;</a>
          </div>
          <div class="card-footer text-muted">
            Posted on January 1, 2020 by
            <a href="#">Start Bootstrap</a>
          </div>
        </div>

        <!-- Blog Post -->
        <div class="card mb-4">
          <img class="card-img-top" src="blog/articles/images/imagetest.jpg" alt="Card image cap">
          <div class="card-body">
            <h2 class="card-title">The social response in the Covid crisis</h2>
            <p class="card-text">We have read and heard lots about the coronavirus, its impact, its possible causes, its consequences, correct and wrong measures taken by different governments around the world. This article won´t take face any of these issues, it will focus in the genuine private initiative as a response to the coronavirus crisis and particularly to the lack of the face mask supply.</p>
            <a href="article2" class="btn btn-primary">Read More &rarr;</a>
          </div>
          <div class="card-footer text-muted">
            Posted on January 1, 2020 by
            <a href="#">Start Bootstrap</a>
          </div>
        </div>

        <!-- Blog Post -->
        <div class="card mb-4">
          <img class="card-img-top" src="blog/articles/images/surgical-mask.jpg" alt="Card image cap">
          <div class="card-body">
            <h2 class="card-title">Please wear masks! There is hard evidence that are useful to avoid contagion!</h2>
            <p class="card-text">In this article we will make a review on what is proved on the propagation of the coronavirus because understanding this will make us take conscience on the importance of wearing the masks. We will highlight a concrete case in which a massive contagion was avoided and a final reflection on some measures that governments could take. </p>
            <a href="article3" class="btn btn-primary">Read More &rarr;</a>
          </div>
          <div class="card-footer text-muted">
            Posted on January 1, 2020 by
            <a href="#">Start Bootstrap</a>
          </div>
        </div>

        <!-- Blog Post -->
        <div class="card mb-4">
          <img class="card-img-top" src="blog/articles/images/art4/trabajo.jpg" alt="Card image cap">
          <div class="card-body">
            <h2 class="card-title">Labor flexibilization laws: A possible reform te recover from the crisis?</h2>
            <p class="card-text">This is a great article because we will discuss what is the “correct” level of labor rights that must rule in a society and what are the lessons that we must learn from history. History teachers evaluate their students if they remember the names and dates about history, but the most important thing about this subject is not the facts but the lessons that history leaves to us.</p>
            <a href="article4" class="btn btn-primary">Read More &rarr;</a>
          </div>
          <div class="card-footer text-muted">
            Posted on January 1, 2020 by
            <a href="#">Start Bootstrap</a>
          </div>
        </div>

        <!-- Pagination -->
        <ul class="pagination justify-content-center mb-4">
          <li class="page-item">
            <a class="page-link" href="#">&larr; Older</a>
          </li>
          <li class="page-item disabled">
            <a class="page-link" href="#">Newer &rarr;</a>
          </li>
        </ul>

      </div>

      <!-- Sidebar Widgets Column -->
      <div class="col-md-4">

        <!-- Search Widget -->
        <div class="card my-4">
          <h5 class="card-header">Search</h5>
          <div class="card-body">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-append">
                <button class="btn btn-secondary" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>

        <!-- Categories Widget -->
        <div class="card my-4">
          <h5 class="card-header">Categories</h5>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6">
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">Freebies</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Side Widget -->
        <div class="card my-4">
          <h5 class="card-header">Side Widget</h5>
          <div class="card-body">
            You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
          </div>
        </div>

      </div>

    </div>
    <!-- /.row -->

  </div>
  <!-- /.container -->

@endsection