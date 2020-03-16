<?php

    //--登陆控制
    require_once("isLogin.php");
    if(!isLogin()){
        echo "请登录";
        return;
    }


    header('Content-type: application/json');  
	//输出接收到的数据（即 talk.php 发过来的数据）
	$uid=$_POST['uid'];
    $rid=$_POST['rid'];
    $check_time=$_POST['check_time'];
    $leave_time=$_POST['leave_time'];
    $number=$_POST['number'];
    require_once("connection.php");
        



        $sql = "INSERT INTO ordertb (uid,rid,check_time,leave_time,number) VALUES ('{$uid}', '{$rid}','{$check_time}','{$leave_time}','{$number}');";
        $res = $mysqli -> query($sql);
        if (!$res) {
            die("sql error:\n".$mysqli -> error);
        }

	echo "success";


?>