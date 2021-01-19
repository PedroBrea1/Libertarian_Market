@extends('blog.articles.plantilla-article-blog')

@section('content')

  <!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- Post Content Column -->
      <div class="col-lg-8">

        <!-- Title -->
        <h1 class="mt-4">Labor flexibilization laws: A possible reform te recover from the crisis?</h1>

        <!-- Author -->
        <p class="lead">
          by
          <a href="#">Start Bootstrap</a>
        </p>

        <hr>

        <!-- Date/Time -->
        <p>Posted on January 1, 2019 at 12:00 PM</p>

        <hr>

        <!-- Preview Image -->
        <img class="img-fluid rounded" src="blog/articles/images/art4/trabajo.jpg" alt="">

        <hr>

        <!-- Post Content -->
        <p class="lead">This is a great article because we will discuss what is the “correct” level of labor rights that must rule in a society and what are the lessons that we must learn from history. History teachers evaluate their students if they remember the names and dates about history, but the most important thing about this subject is not the facts but the lessons that history leaves to us. </p>
        <br>
        <p>
            On the one hand, an excess of labor rights have major consequences: a low level of investment, low risk assumptions from entrepreneurs, excessive power of labor unions and a great number of people working in the informal economy. Working in the informal economy means that the worker don’t have any labor rights as well as it occurred in 19th century.
        </p>
        <br>
        <p>
            On the other hand, a lack of labor rights derives in constant abuses from the employer to the employee. You as a reader can know someone that lived that situation or either you could have lived a situation in which your employer took advantage because of an asymmetric relationship with you. We can see politicians around the world that abuse of their power and use it against their citizens. Employers and politicians are human beings, they have their defects and their own miseries, if there is no regulation in the relationship between an employer and an employee there will be lots of abuses of power in those asymmetric relationships.
          </p>
          <br>
        <p>
            In the image below it is shown what employers can do with employees when the only regulations in the assymetric relationship between employers and employees are the rules of the market:
          </p>
          <br>
          <img src="blog/articles/images/art4/child-labor.jpg" class="imagenarticle">
          <p>
            Children working in a coal mine 10 hours per day for less than 1 dollar.
          </p>
          <br>
          <p>
            England was the first country to face the issues of abuses of power in labor asymmetric relationships because it was the first country in history to face the phenomenom of industrialization. When making an overview on how laborers had to fight to gain their rights one thing is clear, if there is no law the employer won’t give the worker what he deserves because it is an extra cost. The employer in the search of efficiency tends optimize their margin by increasing their revenue and reducing their cost. 
          </p>
          <br>
          <p>
            Although a purist can say that if a worker doesn’t feel comfortable in the job he or she can just leave and find another one, real life is a very different issue. If the economy is in a recession and a family depends on you it is difficult to leave the job you hate to find another one because the family needs a continuous source of income. Moreover, if you are in that situation you don’t have much power of negotiation for changing your terms with your employer because your boss can simply fire you.
          </p>
          <br>
          <img src="blog/articles/images/art4/profit.jpg" class="imagenarticle">
          <br>
          <p>
            Having said all these which is not trivial at all in this subject it is important to highlight that populist politicians and irresponsible policy makers continuously promise people more and more labor rights to gain votes in the future election. Politicians in their search for power not only promise, but also give laborers excessive labor rights because it is what gives them the approbation of the masses.
          </p>
          <br>
          <p>
            Furthermore, labor laws are not irrelevant in the change of an economic cycle and it all stands in an equilibrium. On the one hand, excessive labor laws avoid workers from losing their jobs in a recession but, on the other hand, it deepens the economic recession not letting job seekers to find a job and better opportunities in their life. Giving so many rights to the laborers is a driver against economic growth and the prosperity of a nation.
          </p>
          <br>
          <p>
            This is a very interesting subject in which everything moves around an equilibrium point and in which the key issue is the correct understanding of human nature. Human nature showing that excess of labor rights lead to people not finding jobs and better opportunities in their lifes but also showing that lack of labor rights lead constant abuses of power in asymmetric relationships.  
          </p>
          <br>
          <p>
            In conclusion, you as a reader probably have an idea on how the labor laws must be. A great exercise to do is first defining what are your thoughts on labor law and then searching throughout history what were the results when the laws that are in your mindset were applied. That is an excellent exercise because history is a great teacher for us if not the best of all our teachers in life. When finishing the process you will change or you will maintain your position but you will have a more solid thought on this subject.
          </p>
          <br>
          <p>
            It is highly unpopular to make a labor flexibilization law. In most of the countries where they where carried lots of manifestations where made by workers and labor unions. Moreover, the press will heavily criticise the policy makers because of taking labor rights to the citizens... but millions of people lost their jobs because of the government response against covid and won't recover their job if nothing is done.
          </p>
          <br>
          <p>
            The image below will be part of the common day by day in the post covid world:
          </p>
          <img src="blog/articles/images/art4/erwer.jpg" class="imagenarticle">
          <p>
            What are your thoughts? Should policy makers do labor flexibilization laws in order to get people back to work? 
          </p>
        <hr>

        <!-- Comments Form -->
        <div class="card my-4">
          <h5 class="card-header">Leave a Comment:</h5>
          <div class="card-body">
            <form id="leave-comment">
              @csrf
              <div class="form-group">
                <input type="text" name="username" placeholder="User Name">
                <textarea class="form-control" rows="3" name="message"></textarea>
              </div>
              <input type="hidden" name="comment_id" value="0">
              <button type="submit" class="btn btn-primary" id="submit">Post</button>
            </form>
          </div>
        </div>






        <!-- Single Comment -->
        <ul>
          @foreach($result as $row)
          <li>
            <div class="media mb-4">          
              <div class="media-body">
                <h5 class="mt-0">{{ $row->comment_sender_name }}</h5>
                {{ $row->comment }}
              </div>
            </div>
          </li>
          @endforeach
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

<script src="js/jquery.min.js"></script>
        <script type="text/javascript">
         $(document).ready(function(){


            $('#leave-comment').submit(function(){

               var datos = $('#leave-comment').serialize();
               var form = $('#leave-comment');

               $.ajax({
                  type:"POST",
                  url:"article4post",
                  data: datos,
                  error: function (data) {
                  alert(data.error);
                },
                  success:function(r){
                        if (r == 1){
                              alert("We recieved your feedback!");
                              form[0].reset();
                              window.location.href = "article4";
                        }else{                          
                              alert("Please fill all the data correctly!");
                        }
                  }
               });

               /*el return false lo que hace es que no vuelva a recargar despues de que se aplico la propiedad submit del boton*/
               /*el return false aqui colocado es lo que evita la recarga*/
               return false;

            });            

         });
        </script>