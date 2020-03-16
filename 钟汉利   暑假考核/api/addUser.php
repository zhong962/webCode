<?php



header('Content-type: application/json');
$name = $_POST['name'];
$password = $_POST['password'];
$phone = $_POST['phone'];
require_once "connection.php";


if($name == "null" || $password == "null"){
    echo "账号和密码不能为空！";
    return;

}


//审核是否重复
$sql = "select * from user where name = '{$name}';";
$res = $mysqli->query($sql);
if (!$res) {
    die("sql error:\n" . $mysqli->error);
}
// 将查到的数据库记录保存到$result[]数组中
if ($row = $res->fetch_assoc()) {
    echo "账号已存在";
    return;
}
$sql = "INSERT INTO user (name, password,phone) VALUES ('{$name}', '{$password}','{$phone}');";
$res = $mysqli->query($sql);
echo "注册成功";






?>