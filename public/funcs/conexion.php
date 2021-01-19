<?php
	
	$mysqli=new mysqli("localhost","brea5","12345","l1b3rt56ari74ke3"); //servidor, usuario de base de datos, contraseña del usuario, nombre de base de datos
	
	if(mysqli_connect_errno()){
		echo 'Conexion Fallida : ', mysqli_connect_error();
		exit();
	}
	
?>