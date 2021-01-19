@extends('blog.articles.plantilla-blog')

@section('content')

        <title>Contact Us</title>
        <div class="titulo">Contact Us</div>
             
               <div>
                     <p class="partner-paragraph-contact">Your feedback and critics are very welcome to us!</p>
                     <!-- form -->
                     <form class="form-contact" id="form-contact">

                     		@csrf
                              <input type="text" name="name" placeholder="Your name" class="fieldcontact1" />

                              <input type="text" name="email" placeholder="Email" class="fieldcontact2"/>

                              <input type="password" name="password" placeholder="Password" class="fieldcontact3"/>

                              <button class="fieldbuttoncontact" type="submit" id="submit">Send</button>

                     </form>
                     <!-- end form -->
                  </div>

@endsection

<script src="js/jquery.min.js"></script>
<script type="text/javascript">
         $(document).ready(function(){

         	
            $('#form-contact').submit(function(){

               var datos = $('#form-contact').serialize();
               var form = $('#form-contact');

               $.ajax({
                  type:"POST",
                  url:"register5",
                  data: datos,
                  error: function (data) {
                	alert(data.error);
            		},
                  success:function(r){
                        if (r == 1){
                              alert("We recieved your feedback!");
                              form[0].reset();
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