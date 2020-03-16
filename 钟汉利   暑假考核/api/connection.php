<?php

    //数据库公用连接池

	$mysql_conf = array(
    'host' => 'localhost:3306',
    'db' => 'guet',
    'db_user' => 'root',
    'db_pwd' => '',
	);

    $mysqli = @new mysqli($mysql_conf['host'], $mysql_conf['db_user'], $mysql_conf['db_pwd']);
    if ($mysqli -> connect_errno) {
        die("could not connect to the database:\n".$mysqli -> connect_error);
    }
    $mysqli -> query("set names 'utf8'");
    $select_db = $mysqli -> select_db($mysql_conf['db']);
    if (!$select_db) {
        die("could not connect to the db:\n".$mysqli -> error);
    }
    //在调用页面关闭，否则其他页面没拿到数据就被关闭了
    //$mysqli -> close();
?>