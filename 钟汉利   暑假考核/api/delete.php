<?php
//删除用户
    header('Content-type: application/json');  
	$id=$_POST['id'];
	
    require_once("connection.php");
    $sql = "delete from user where id = '{$id}';";
    $res = $mysqli -> query($sql);
    if (!$res) {
            die("sql error:\n".$mysqli -> error);
    }
	echo "success";

?>