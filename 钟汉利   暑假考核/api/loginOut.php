<?php
    header('Content-type: application/json');
    session_start();
    session_destroy();
    echo "loginOut";
?>