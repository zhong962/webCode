<?php

//判断是否登陆
//登陆返回1
//未登录返回0
error_reporting(E_ALL ^ E_NOTICE);
 function isLogin(){
    //----session 判断登陆
    session_start();
    $uid = $_SESSION['uid'];
    if ($uid) {
        return 1; 
     }
     else{
         return 0;
     }

}


//判断管理员
function isAdmin(){
   //----session 判断登陆
   session_start();
   $admin = $_SESSION['admin'];
   if ($admin) {
       return 1; 
    }
    else{
        return 0;
    }

}


?>