<?php

require_once("connection.php");
header('Content-type: application/json');  

    // 查询表的全部记录
    $sql = "select * from room;";
    $res = $mysqli -> query($sql);
    if (!$res) {
        die("sql error:\n".$mysqli -> error);
    }

    // 将查到的数据库记录保存到$result[]数组中
    while ($row = $res -> fetch_assoc()) {
        $result[]=$row;
    }
    

    //-----

    class Room 
    {
    public $rid;
    public $type;
    public $price;
    public $img;
  
    public $other;
    }



    //遍历$result[]数组
    foreach($result as $key=>$v){	
    
        $room = new Room();
        $room->rid = $v['rid'];
        $room->type = $v['type'];
        $room->price = $v['price'];
        $room->img = $v['img'];
       
        $room->other = $v['other'];
        $data[]=$room;
    }
    $json = json_encode($data);//把数据转换为JSON数据.
    echo $json;
    

    //-------


    $res -> free();
    $mysqli -> close();
?>