<?php 

require '../funcs/conexion.php';
include '../funcs/funcs.php';

$errores = '';
$connect = '';
$query ='';
$result = '';
$username = '';
$user = '';
$email = '';
$upgrade = '';
$asunto = '';
$cuerpo = '';


if ($_SERVER['REQUEST_METHOD'] == 'POST'){

    
    
    $user = $_POST['user'];
    $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
    //$upgrade = filter_var($_POST['upgrade'], FILTER_SANITIZE_STRING);
    $asunto = 'Welcome to Libertarian Market';
    $cuerpo = "Hello $user!<br /><br />We hope that you have a great experience in our community!<br/><br/>To see the last articles that were updated please go to our site by clicking in the link below:<br/><br/><a href='https://www.libertarianmarket.com/index.php'>www.libertarianmarket.com</a><br/><br/>Thanks!<br/><br/>Libertarian Market";

   if (empty($email)) {
      $errores .= 'Please fill the data again';
    }
    
    /*if(!isEmail($email))
		{
			$errores[] = "Debe ingresar un correo electronico valido";
		}*/

   if ($errores == '') {
       
     if(saludoEmail($email, $user, $asunto, $cuerpo)){
				
				}
       
    $hostname = 'localhost';
    $username = 'brea5';
    $key ='12345';
    $databasename ='l1b3rt56ari74ke3';

    $connect = mysqli_connect($hostname, $username, $key, $databasename);

    $query = "INSERT INTO newsletter (id, username, email) VALUES (null,'$user', '$email')";

    echo mysqli_query($connect, $query);

}

}

?>