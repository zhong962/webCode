<?php

header('Content-type: application/json');  

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
    // 查询表的全部记录
    $sql = "select * from user;";
    $res = $mysqli -> query($sql);
    if (!$res) {
        die("sql error:\n".$mysqli -> error);
    }

    // 将查到的数据库记录保存到$result[]数组中
    while ($row = $res -> fetch_assoc()) {
        $result[]=$row;
    }

    //遍历$result[]数组
    // foreach($result as $key=>$v){
    //     echo "<li>";
	// 	echo $v['name'];    //姓名
	// 	echo " ";           //空格
	// 	echo $v['password']; //留言
	// 	echo "</li>";
    // }
    

    //-----

    class User 
    {
    public $id;
    public $name;
    public $password;
    }



    //遍历$result[]数组
    foreach($result as $key=>$v){	
    
        $user = new User();
        $user->id = $v['id'];
        $user->name = $v['name'];
        $user->password = $v['password'];
        $data[]=$user;
    }
    $json = json_encode($data);//把数据转换为JSON数据.
    echo $json;
    

    //-------


    $res -> free();
    $mysqli -> close();
?>