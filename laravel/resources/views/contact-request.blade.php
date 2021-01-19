@extends('plantilla')

@section('content')

<!-- Default form contact -->
<div class="container-form">
   <form class="text-center border border-light p-5" id="form-contact">
    @csrf
    <p class="h4 mb-4">Contact us</p>

    <!-- Name -->
    <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name" name="name">
    
    <input type="text" id="defaultContactFormEmail" class="form-control mb-4" placeholder="E-mail" name="email">

    <input type="text" id="defaultContactFormEmail" class="form-control mb-4" placeholder="Type" name="type">

    <div class="form-group">
        <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message" name="messager"></textarea>
    </div>

    <!-- Send button -->
    <button class="btn btn-info btn-block" type="submit">Send</button>

</form>
<!-- Default form contact -->
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
                  url:"contact-request",
                  data: datos,
                  error: function (r) {
                	alert("Please fill all the data correctly!");
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