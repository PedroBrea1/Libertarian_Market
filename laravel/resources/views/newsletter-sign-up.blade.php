@extends('plantilla')

@section('content')

        <title>Newsletter</title>
        <div class="titulo">Sign Up to our Newsletter!</div>
          
               <div>
                     <p class="partner-paragraph-newsletter">We’d love to stay in touch! Sign up for the Libertarian team to contact you with great news, content and offers!</p>
                     
                     <form class="form-newsletter" id="form-newsletter4" >
                              @csrf
                              <input type="text" name="username" placeholder="Username" class="enterbusinessname" />

                              <input type="email" name="email" placeholder="Email" class="enterpassword" />                                
                              <button class="fieldbuttonnewsletter" type="submit">Send</button>

                     </form>

                  </div>


@endsection

                  
<script src="js/jquery.min.js"></script>
<script type="text/javascript">
         $(document).ready(function(){
            
            $('#form-newsletter4').submit(function(){

               var datos = $('#form-newsletter4').serialize();
               var form = $('#form-newsletter4');

               $.ajax({
                  type:"POST",
                  url:"contact-form2",
                  data: datos,
                  error: function (data) {
                	alert(data.error);
            		},
                  success:function(r){
                        if (r == 1){
                              alert("Thank you for joining our community!");
                              form[0].reset();                              
                        }else{
                              alert("Please fill all the data!");
                        }
                  }
               });

               /*el return false lo que hace es que no vuelva a recargar despues de que se aplico la propiedad submit del boton*/
               /*el return false aqui colocado es lo que evita la recarga*/
               return false;

            });

         });
</script>