<?php

//所有订单

require_once("connection.php");
header('Content-type: application/json');  


//--登陆控制
//只有管理员admin才能查看全部订单
require_once("isLogin.php");
if(!isAdmin()){
    echo "权限不足";
    return;
}



class Order 
    {
    public $oid;
    public $uid;
    public $name;
    public $rid;
    public $type;
    public $price;
    public $img;
    public $create_time;
    public $check_time;
    public $leave_time;
    public $number;
    public $other;
    }

    

    // 查询 ordertb 表的全部记录
    //$sql = "select * from ordertb;";
    
    $sql = "SELECT user.uid,user.name,user.phone,room.rid,room.type,room.price,room.img,room.other,ordertb.oid,ordertb.create_time,ordertb.check_time,ordertb.leave_time,ordertb.number 
    FROM `user`,`room`,`ordertb` 
    WHERE user.uid = ordertb.uid AND room.rid = ordertb.rid";


    $res = $mysqli -> query($sql);
    

    // 将查到的数据库记录保存到$result[]数组中
    while ($row = $res -> fetch_assoc()) {
        $result[]=$row;
    }
    
    //遍历$result[]数组
    foreach($result as $key=>$v){	
        $order = new Order();
        $order->oid = $v['oid'];
         $order->uid = $v['uid'];
         $order->rid = $v['rid'];
         $order->name = $v['name'];
         $order->type = $v['type'];
         $order->price = $v['price'];
         $order->img = $v['img'];
         $order->create_time = $v['create_time'];
         $order->check_time = $v['check_time'];
         $order->leave_time = $v['leave_time'];
         $order->number = $v['number'];
        $order->other = $v['other'];
        
        $data[]=$order;
    }
    

    
     $json = json_encode($data);
     echo $json;



    $res -> free();
    $mysqli -> close();
?>