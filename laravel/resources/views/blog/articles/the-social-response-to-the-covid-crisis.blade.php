@extends('blog.articles.plantilla-article-blog')

@section('content')

  <!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- Post Content Column -->
      <div class="col-lg-8">

        <!-- Title -->
        <h1 class="mt-4">The social response in the Covid Crisis</h1>

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
        <img class="img-fluid rounded" src="blog/articles/images/imagetest.jpg" alt="">

        <hr>

        <!-- Post Content -->
        <p class="lead">We have read and heard lots about the coronavirus, its impact, its possible causes, its consequences, correct and wrong measures taken by different governments around the world. This article won´t take face any of these issues, it will focus in the genuine private initiative as a response to the coronavirus crisis and particularly to the lack of the face mask supply. When a human being sees or perceives a lack of something in the system, when it perceives that another human being needs help, it reacts in consequence. We will discuss different cases and reflections among them.  </p>
        <br>
        <p>
            First of all, the person that want to start into action has a dilemma, if tell or not to tell that he or she will help others. One the one hand, communicating it to the society can make feel the person uncomfortable as he can let to understand that he is taking advantage of the situation to his personal benefit. On the other hand, communicating it can encourage other people to take action and help even more other people that are in need. Having said that, lets see some cases in which the society organized in order to help the ones in need.
        </p>
        <br>
        <p>
            In order to make it real, we choose stories of people that organized themselves without the pressure of any government or any international institution such as the World Health Organization or the International Monetary Fund. The fact that these people weren’t pressured make the stories more genuine, more real, more worth to be know about.
          </p>
          <br>        
          <img src="blog/articles/images/imagetest2.jpg" class="imagenarticle">
          <br>
          <p>
            The first case is of a group of women in Weston, Florida, United States. All of them have Spanish as their native language as they come from latinamerican countries. They founded the facebook group “Por todos” by the initiative of a chilenian graphic designer called María Pía Sanchez. She put her human capital and her know how under the service of the community. They organized and produced face masks only for donation matters, they don’t take any profit from this activity.
          </p>
          <br>
          <p>
            Moreover, in the facebook group they encourage the members to communicate the things that they achieve when helping others during the crisis as well as sharing their methodologies with videos and tutorials in order to train the ones that want to help but don’t know where to start. 
          </p>
          <br>
          <p>
            The next case is of Alex Galarza, a Mexican businessman of only 27 years old. There are many doctors in his family and the reason why he was very conscious of the lack of medical supplies that healthcare system had in his country. He put his own resources in order to produce the masks and encouraged other people around Mexico to organize with their resources (time, capital, know how) in order to produce more masks and help the healthcare system in his country, not only on the production but also on the distribution of the masks.
          </p>
          <br>
          <img src="blog/articles/images/imagetest3.jpg" class="imagenarticle">
          <br>
          <p>
            Furthermore, many artists took the initiative with their own capital and their convening power to face this crisis.
          </p>
          <br>
          <p>
            Shakira, the Colombian singer, donated thousands of N95 masks and ventilators for healthcare workers in Colombia.
          </p>
          <br>
          <p>
            The comedian Amy Schumer donated 2,500 masks and 2,500 coronavirus kits to the Mount Sinai South Nassau in Oceanside, New York, where her best friend, Jen Cloudman, works with the help of Bethenny Frankel‘s foundation BStrong.  
          </p>
          <br>
          <p>
           The Atlanta Falcons owner , Arthur Blank,  reportedly donated $5.4 million to the Greater Atlanta COVID-19 Response and Recovery Fund, a charity that was set up to help those affected in Georgia by the virus.
          </p>
          <br>
          <p>
            The reality star Bethenny Frankel donated $250,000 to the making of N95 masks to be distributed to various NYC hospitals.
          </p>
          <br>
          <p>
            The image below will be part of the common day by day in the post covid world:
          </p>
          <img src="blog/articles/images/imagetest4.jpg" class="imagenarticle">
          <p>
            The performer Billy Joel and his wife, Alexis, announced that they were giving back via his Joel Foundation and BStrong on March 31, declaring an initial donation of $500,000 in the form of Personal Protective Equipment (PPE), which includes masks, corona kits and hazmat suits for healthcare workers. 75% of the donation was allocated for New York City and the Long Island area, with the remaining 25% going to hospitals in other parts of New York State. 
          </p>
          <br>
          <p>
            The rapper Diddy hosted the Team Love Dance-A-Thon on April 12 over Instagram Live, where he danced with celebs virtually, and encouraged fans to give generously to the cause. The event wound up raising $3.7 million in total -- including a $1 million donation from Ciroc -- for Direct Relief, an organization devoted to providing masks and personal protective equipment to healthcare organizations across the nation.
          </p>
          <br>
          <p>
            The list can be as large as the reader can imagine and many more cases can be mentioned but the reason for this article is to highlight how the individuals react when they perceive that there are many people in need. In order to make this article real the cases mentioned did not have any pressure of any government or any international institution, it is pure private initiative. Their source is of people asking from help and the perception of the individuals that other people are in need and how serious the situation is.
          </p>
          <br>
          <p>
            The writer of this article personally believes that the society is much more better than their members think. Furthermore, we underestimate the capability that we as a society have to organize, coordinate, face the problems and solve them. We as human beings have our defects and our miseries but the society is much more better than we think it is. ¿Did someone make us feel that we as a society are not as good as we really are? ¿Why don't we believe in us?
          </p>
          <br>
          <p>
            We underestimate what the society can do without the pressure of the state. We underestimate the power that this feeling of discomfort on their members can do in order to solve problems. 
          </p>
          <br>
          <p>
            What are your thougths? Do you think that the society is better than we think it is? Do we underestimate what the society can achieve by its own coordination and organization? Do you know any story that is worth to be known?
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
                  url:"article2post",
                  data: datos,
                  error: function (data) {
                  alert(data.error);
                },
                  success:function(r){
                        if (r == 1){
                              alert("We recieved your feedback!");
                              form[0].reset();
                              window.location.href = "article2";
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