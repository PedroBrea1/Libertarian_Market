<?php 

$error = '';
$connect = '';
$query ='';
$result = '';
$comment_name = '';
$comment_content = '';

$hostname = '127.0.0.1';
$username = 'root';
$key ='';
$databasename ='articles';

$connect = new PDO('mysql:host=localhost; dbname=p1e9d9r1o', 'brea5','12345'); 


if (empty($_POST["comment_name"]))
{
  $error .= 'Name is required';
}
else
{
  $comment_name = $_POST["comment_name"];
}

if (empty($_POST["comment_content"]))
{
  $error .= 'Content is required';
}
else
{
  $comment_content = $_POST["comment_content"];
}

if ($error == '')
 {
  $query = "
  INSERT INTO article_3
  (parent_comment_id, comment, comment_sender_name)
  VALUES (:parent_comment_id, :comment, :comment_sender_name)
  ";
  $statement = $connect->prepare($query);
  $statement->execute(
    array(
      ':parent_comment_id'  => $_POST["comment_id"],
      ':comment' => $comment_content,
      ':comment_sender_name' => $comment_name
    )
  );
  //$error = 'Comment added';
}

$data = array(
  'error' => $error
);

echo json_encode($data);



?>