<?php

//TODO: поменять пароль
$link = mysqli_connect("localhost",
    "root",
    "31August2008",
    "knigopoisk");

$login = $_GET['login'];
$password = $_GET['password'];

if ($link === false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    return;
} else {
    $sql = "select user_id from user
    where login = ? and password = ?";
    $stmt = $link->prepare($sql);
    $stmt->bind_param('ss', $login, $password);
    if($stmt->execute()){
        mysqli_stmt_bind_result($stmt, $id);
        while (mysqli_stmt_fetch($stmt)) {
            printf("%s", $id);
        }
    }
}
$link->close();

