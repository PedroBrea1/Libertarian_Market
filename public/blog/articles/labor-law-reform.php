<?php



$hostname = '127.0.0.1';
$username = 'root';
$key ='';
$databasename ='articles';

 $connect = mysqli_connect($hostname, $username, $key, $databasename);

require 'views/labor-law-reform.views.php';

?>  