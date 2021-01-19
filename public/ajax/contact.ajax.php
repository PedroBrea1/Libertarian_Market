<?php 

$errores = '';
$connect = '';
$query ='';
$result = '';
$name = '';
$phone = '';
$email = '';
$messager = '';


if ($_SERVER['REQUEST_METHOD'] == 'POST'){

    $hostname = '127.0.0.1';
    $username = 'brea5';
    $key ='12345';
    $databasename ='l1b3rt56ari74ke3';

    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
    $messager = filter_var($_POST['messager'], FILTER_SANITIZE_STRING);
    

   if (empty($name) or empty($phone) or empty($email) or empty($messager)) {
      $errores .= 'Please fill the data again';
    }

   if ($errores == '') {

    $connect = mysqli_connect($hostname, $username, $key, $databasename);

    $query = "INSERT INTO feedback (id, name, phone, email, messager) VALUES (null, '$name', '$phone', '$email', '$messager')";

    echo mysqli_query($connect, $query);

}

}

?>