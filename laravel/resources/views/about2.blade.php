@extends('blog.articles.plantilla-article-blog')

@section('content')

  <!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- Post Content Column -->
      <div class="col-lg-8">

        <!-- Title -->
        <h1 class="mt-4">About Libertarian Market</h1>

        <!-- Preview Image -->
        <img class="img-fluid rounded" src="images/libertarianlogo.jpg" alt="">

        <hr>

        <!-- Post Content -->
        <p class="lead">
            Unique website with different products and services
        </p>
        <br>
        <img src="images/about1.png" class="imagenarticle">
        <br>
        <p>In this site we enhance competition which is one of the values of liberty under which you will find a diverse variety of products and services.<br><br>No one can know better than you what is your story, what are your dreams, what are your interests and preferences.</p>
        <br><br>
        <img src="images/about21.jpg" class="imagenarticle">
        <br>
        <p class="lead">
            Analysis comparing different markets around the world
        </p>
        <br>
        <p>The market is a process of continuos discovery and sharing of information and experiences between the individuals.<br><br>In this site you will find evidence that shows that a society can develop under its full potential when the individuals can live in liberty.</p>
        <br><br>
        <img src="images/libertarianlogo.jpg" class="imagenarticle">
        <br>
        <p class="lead">
            Symbology
        </p>
        <br>
        <p>Light blue stands for the colours of the sky in the day and the hope of the things we can achieve by our own means making use of our skills in a free society for a better life.<br><br>Violet and blue stands for integrity, wisdom and creativity as values for the development of freedom.<br><br>Yellow, orange and red are the youth, hapiness and vitality.</p>
        <hr>       



      </div>

    </div>

  </div>



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