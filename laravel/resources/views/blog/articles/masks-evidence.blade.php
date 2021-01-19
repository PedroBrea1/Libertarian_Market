@extends('blog.articles.plantilla-article-blog')

@section('content')

  <!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- Post Content Column -->
      <div class="col-lg-8">

        <!-- Title -->
        <h1 class="mt-4">Please wear masks! There is hard evidence that are useful to avoid contagion!</h1>

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
        <img class="img-fluid rounded" src="blog/articles/images/surgical-mask.jpg" alt="">

        <hr>

        <!-- Post Content -->
        <p class="lead">In this article we will make a review on what is proved on the propagation of the coronavirus because understanding this will make us take conscience on the importance of wearing the masks. We will highlight a concrete case in which a massive contagion was avoided and a final reflection on some measures that governments could take.  </p>
        <br>
        <p>
            The World Healt Organization, the only institution authorized to define what information is valid and what is not in this crisis, states the following:
        </p>
        <br>
        <p>
            “Current evidence suggests that COVID-19 spreads between people through direct, indirect (through contaminated objects or surfaces), or close contact with infected people via mouth and nose secretions. These include saliva, respiratory secretions or secretion droplets. These are released from the mouth or nose when an infected person coughs, sneezes, speaks or sings, for example. People who are in close contact (within 1 metre) with an infected person can catch COVID-19 when those infectious droplets get into their mouth, nose or eyes.
          </p>
          <br>
        <p>
            To avoid contact with these droplets, it is important to stay at least 1 metre away from others, clean hands frequently, and cover the mouth with a tissue or bent elbow when sneezing or coughing. When physical distancing (standing one metre or more away) is not possible, wearing a fabric mask is an important measure to protect others. Cleaning hands frequently is also critical.”
          </p>
          <br>
          <p>
            After reading the conclusión that the WHO has arrived after the evaluation of different research that was made by institutions around the world it is clear that the use of the mask is absolutely important to avoid massive risk contagion. If we all have in clear how the transmission of the virus is, we will be much more conscious of how the virus is transmitted.
          </p>
          <br>
          <img src="blog/articles/images/art3/bluefacemask.png" class="imagenarticle">
          <br>
          <p>
            Until now, everything said is far away from the day-by-day of the reader as well as the writer of this article… so let’s talk about a concrete case in which the use of a mask avoided a great contagion.
          </p>
          <br>
          <p>
            The case occurred in the United States in a hairdressing in Springfield, Missouri. Two hairdressers proved to have the virus and were in contact with 140 clients. When the clients were tested none of them give a positive result in the test. What happened? The hairdressers were responsable workers that do their job wearing the mask. 
          </p>
          <br>
          <img src="blog/articles/images/art3/image.jpg" class="imagenarticle">
          <br>
          <p>
            Although authorities repeat once and again how important is to wear the mask, although what the WHO research conclude… it is in a real life case were the society takes real consciousness of the importance of wearing the mask. Why? Because it is a case of the day-by-day of every citizen while the government authorities and WHO are far away from the day-by-day of people matters. It is natural, it is what it is.
          </p>
          <br>
          <p>Human nature reveals that people make all the time cost/benefit calculations in order to make their decisions. If there is not cost for not wearing the mask, then people won’t wear it. Appealing to the consciousness of the society won’t bring good results, if people are not fined for wearing a mask the contagion rate will be very difficult to be reduced.</p>
          <br>
          <p>
            This means making a decision taking into account human nature and without taking away freedom from society. Specially the freedom of going to work which is one of the most important issues in the life of an individual. In this case, appealing to the economic incentives can bring great results in reducing the contagion.
          </p>
          <br>
          <p>
            Citizens must be fined for not wearing masks in public places as well as businesses must also be fined in cases where their employees don’t wear a mask and don’t respect the maximum capacity in their locals in order to avoid social distancing. The máximum capacity measure is a one that have a great economic impact, not just for the businesses but for the workers that won’t recover their job. It is a painful decision to make but if the contagion is under control people will be more calmed and would be a driver to a better recovery of the economy.
          <br>
          <p>
            What are your thoughts? Do you think that people should be fined for not wearing a mask? Do you think that appealing to the consciousness of the society is enough to make people wear the mask?  
          </p>
          <br>
          
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
                  url:"article3post",
                  data: datos,
                  error: function (data) {
                  alert(data.error);
                },
                  success:function(r){
                        if (r == 1){
                              alert("We recieved your feedback!");
                              form[0].reset();
                              window.location.href = "article3";
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