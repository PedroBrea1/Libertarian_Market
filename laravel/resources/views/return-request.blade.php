@extends('plantilla')

@section('content')
<!-- Default form contact -->
<div class="container-form">
   <form class="text-center border border-light p-5" id="form-contact">

    <p class="h4 mb-4">Send us the details of your request</p>

    <!-- Name -->
    <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name">

    <!-- Email -->
    <input type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="E-mail">

    <!-- Subject -->
    
    <select class="browser-default custom-select mb-4">
        <option value="" disabled>Choose option</option>
        <option value="1" selected>Feedback</option>
        <option value="2">Report a bug</option>
        <option value="3">Feature request</option>
        <option value="4">Feature request</option>
    </select>

    <div class="custom-file">
      <input type="file" class="custom-file-input" id="customFileLang" lang="es">
      <label class="custom-file-label" for="customFileLang">Upload File</label>
    </div>

    <!-- Message -->
    <div class="form-group">
        <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
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
                  url:"contact-form",
                  data: datos,
                  error: function (r) {
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