@extends('blog.articles.plantilla-article-blog')

@section('content')

  <!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- Post Content Column -->
      <div class="col-lg-8">

        <!-- Title -->
        <h1 class="mt-4">India and the consolidation of Democracy in the Post Covid World</h1>

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
        <img class="img-fluid rounded" src="blog/articles/images/flag-india.jpg" alt="">

        <hr>

        <!-- Post Content -->
        <p class="lead">In this article we will highlight the role and the significance that India can have in the following years. The key role that can have in the fact that the world economy continues being leaded by democratic countries. In other words, that the world economy maintains in the hands of their citizens.  </p>
        <br>
        <p>
            It is a fact that China will be the first world economy in the following years. Although their actual Gross Domestic Product is similar to the US, it is clear that in the following years the United States will be far behind the Chinese economy. The two main drivers that will make this happen is demographics and the competitive advantages that the Chinese economy has over the US. China has four times the population of the US economy and it is proven that demographics will be a key driver for economic growth in the future.
        </p>
        <br>
        <p>
            This graph shows the forecast of economic growth of the leading countries by 2033 by the Center of Economics and Business Research based in London:
          </p>
          <br>        
          <img src="blog/articles/images/art2/gdp2033.jpg" class="imagenarticle">
          <br>
          <br>
          <p>
            As explained before, one of the main drivers of the difference in growth in the following years is the competitive advantage that developing countries have over the developed ones. Companies such as Apple are continuously pressured by US politicians to stop the production of smartphones in China and move their plants to the United States but Apple can’t do that. Apple can stop its production in China and move to another country with similar characteristics, but it can’t produce the smartphones in a developed country because their competitors will take a great advantage on them. The biggest smartphone companies in the world have their plants in countries similar to China because of their structures.
          </p>
          <br>
          <p>
            This is where India, a consolidated democracy since its independence in 1947, appears in the scene. India is a country with a similar structure as the Chinese economy and is a country where companies such as Apple can move in the following years. The main disadvantages that the Indian economy has are its bureacacy and lack of economic freedom. Although the country made efforts in the last years to improve this situation it is much more work to be done yet. Apple can move to any country in the south east Asia, but in this analysis the important thing is not just moving Apple away from non-democratic countries but also empowering the Indian economy. As empowering the indian economy is empowering democracy around the world, is empowering the citizens in continuing being in control of the world economy. 
          </p>
          <br>
          <p>
            This following graph shows characteristics of the countries with low labour costs in East Asia from the Ranking Doing Business and the World Bank:
          </p>
          <br>
          <img src="blog/articles/images/art2/table.jpg" class="imagenarticle">
          <br>
          <br>
          <p>
            The Chinese leaders had a great performance, just think that 40 years ago they had a central planned economy and now they are in the ranking 31 of the Doing Business review. This is an enormous change in a short period of time for an economy that has 1.400 million citizens. The smaller a country is, the easier that those changes can be made, but the Chinese leaders made it as well in such an enormous and complex country. Regarding the economy and the understanding of the market the only thing that remained in the Chinese Communist Party is its name.
          </p>
          <br>
          <p>
            China made reforms since the end of the 1970’s and that is the main reason why it will be clearly the first world economy. India didn’t make reforms in that direction and it is still a sleeping giant and this giant is at sleep because of the lack of economic freedom in the country.
          </p>
          <br>
          <p>
            If the entire world had a big transformation because of the Chinese reforms, it can have a second big transformation if India make reforms in the same direction as well. This last sentence wasn’t a redundant one. If India makes the reforms that China did in the past the demand for the commodities will rise again and countries that produce that commodities can have another big opportunity to become developed countries as well. Countries such as Chile, that produce and sell copper to the entire world, took advantage of this phenomenon and it had increased the quality of life of their citizens.  
          </p>
          <br>
          <p>
           India has a great respect for democracy, freedom of speech and liberty of cult. In addition, since 2018 it is legal to be homosexual in the country. If you are reader from a developed economy in the west part of the world this will be normal for you, but for the countries in the East this is not a common issue.
          </p>
          <br>
          <p>
            The policies of the Indian politicians and the evolution in the structure of the Indian economy will be an important issue in the following decade. They can be a great driver to economic growth, to the reduction of poverty, a great opportunity for developing countries and will strengthen democracy in the global economy.
          </p>
          <br>
          <p>
            What are your thougths? Do you think that India will do those reforms? Do you think that China one day will turn into a democracy?
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
                  url:"article1post",
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