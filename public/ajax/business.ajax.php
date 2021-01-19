<?php session_start();

$errores = '';
$error1 = '';
$usuarios = '';
$connect = '';
$query ='';
$result = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST'){

    $hostname = '127.0.0.1';
    $username = 'brea5';
    $key ='12345';
    $databasename ='l1b3rt56ari74ke3';

    $connect = mysqli_connect($hostname, $username, $key, $databasename);

    $businessname = filter_var($_POST['businessname'], FILTER_SANITIZE_STRING);
    $password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);
    $password = hash('sha512', $password);

    if (empty($businessname) or empty($password)) {
      $errores .= 'Please fill the data again';
    }else{

    $registro = mysqli_query($connect, "SELECT*FROM companies WHERE businessname = '$businessname' AND password = '$password'");
      //$registro3 = mysqli_query($conn, "SELECT*FROM maindata WHERE businessname='$businessname'  AND valor='4' AND cuenta='3'");

      if ($registro->num_rows > 0){
        $_SESSION['businessname'] = $businessname;
        echo "1";
      }else{
        echo "0";
      }
        
      /*try {
        $conexion = new PDO('mysql:host=Localhost; dbname=laravelt', 'root','');
      } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
      }

      $statement = $conexion->prepare('SELECT * FROM companies WHERE businessname = :businessname AND password = :password');
      $statement->execute(array(':businessname' => $businessname, ':password' => $password ));
      $resultado = $statement->fetch();

      if ($resultado !== false) {
        $_SESSION['businessname'] = $businessname;
        header('Location: business-session.php');
       } else {
        $error1 .= 'Please fill the data again';
       }*/
    }
}

 ?>