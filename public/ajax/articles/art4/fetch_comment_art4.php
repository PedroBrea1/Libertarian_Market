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

$query = "
  SELECT*FROM article_4
  WHERE parent_comment_id = '0'
  ORDER BY comment_id ASC
";

$statement = $connect->prepare($query);

$statement->execute();

$result = $statement->fetchAll();
$output ='';
foreach ($result as $row) 
{
  $output .= '
 <div class="comments_panel">
  <div class="comments_heading">By <b>'.$row["comment_sender_name"].'</b> on <i>'.$row["date"].'</i></div>
  <div class="comments_body">'.$row["comment"].'</div>
  <div class="comments_footer" align="right"><button type="button" class="reply" id="'.$row["comment_id"].'">Reply</button></div>
 </div>
 ';
 $output .= get_reply_comment($connect, $row["comment_id"]);
}

echo $output;

function get_reply_comment($connect, $parent_id = 0, $marginleft = 0)
{
 $query = "
 SELECT * FROM article_4 WHERE parent_comment_id = '".$parent_id."'
 ";
 $output = '';
 $statement = $connect->prepare($query);
 $statement->execute();
 $result = $statement->fetchAll();
 $count = $statement->rowCount();
 if($parent_id == 0)
 {
  $marginleft = 0;
 }
 else
 {
  //$marginleft = $marginleft + 48;
  $marginleft = 20;
 }
 if($count > 0)
 {
  foreach($result as $row)
  {
   $output .= '
   <div class="answers_panel" style="margin-left:'.$marginleft.'px">
    <div class="answers_heading">By <b>'.$row["comment_sender_name"].'</b> on <i>'.$row["date"].'</i></div>
    <div class="answers_body">'.$row["comment"].'</div>
    <div class="answers_footer" align="right"><button type="button" class="reply" id="'.$row["comment_id"].'">Reply</button></div>
   </div>
   ';
   $output .= get_reply_comment($connect, $row["comment_id"], $marginleft);
  }
 }
 return $output;
}


?>