<?php
header('Content-type: application/json');
$name = $_POST['name'];
$password = $_POST['password'];
require_once "connection.php";
class Login
{
    public $uid;
    public $name;
    public $type;
}
$sql = "select * from user where name='{$name}' and password='{$password}';";
$res = $mysqli->query($sql);
if ($res) {
    while ($row = $res->fetch_assoc()) {
        $result[] = $row;
    }
    //遍历$result[]数组
    foreach ($result as $key => $v) {
        $user = new Login();
        $user->uid = $v['uid'];
        $uid = $v['uid'];
        $user->type = $v['type'];
        $type = $v['type'];
        $user->name = $v['name'];
        $data[] = $user;
    }
    session_start();
    $_SESSION['uid'] = $uid;
    if($type == "admin"){
        $_SESSION['admin'] = $type;
    }
    
    $json = json_encode($data);
    echo $json;
} else {
    session_destroy();
    echo "登陆失败";
    die("sql error:\n" . $mysqli->error);
}

?>