<?php 

$errores = '';
$connect = '';
$query ='';
$result = '';
$name = '';
$businessname = '';
$position ='';
$email = '';
$phone = '';
$location = '';
$keywords = '';
$otherinformation = '';
$termsandconditions = '';


if ($_SERVER['REQUEST_METHOD'] == 'POST'){

   $hostname = '127.0.0.1';
   $username = 'brea5';
   $key ='12345';
   $databasename ='l1b3rt56ari74ke3';

   $connect = mysqli_connect($hostname, $username, $key, $databasename);

    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $businessname = filter_var($_POST['businessname'], FILTER_SANITIZE_STRING);
    $position = filter_var($_POST['position'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $location = filter_var($_POST['location'], FILTER_SANITIZE_STRING);
    $keywords = filter_var($_POST['keywords'], FILTER_SANITIZE_STRING);
    $otherinformation = filter_var($_POST['otherinformation'], FILTER_SANITIZE_STRING);

    $connect->set_charset('uft8');
    
    

   if (empty($name) or empty($businessname) or empty($position) or empty($email) or empty($phone) or empty($location) or empty($keywords) or empty($otherinformation)) {
      $errores .= 'Please fill the data again';
    }elseif(isset($_POST['termsandconditions'])){
       

    if ($errores == '') {

    if ($query = $connect->prepare("INSERT INTO requestpartner (id, name, businessname, position, email, phone, location, keywords, otherinformation) VALUES (null, '$name', '$businessname', '$position', '$email', '$phone', '$location', '$keywords', '$otherinformation')")) {

      $query->execute();
      
      echo "1";
    }
     
   }

    }else {
      echo "You must accept terms and conditions";
    }

}

 ?>