<?php
//删除订单
    header('Content-type: application/json');  
	$oid=$_POST['oid'];
	
    require_once("connection.php");
    $sql = "delete from ordertb where oid = '{$oid}';";
    $res = $mysqli -> query($sql);
    if (!$res) {
            die("sql error:\n".$mysqli -> error);
    }
	echo "success";

?>