<?php


$link = mysqli_connect("localhost",
    "root",
    "31August2008",
    "knigopoisk");

$login = $_POST['login'];
$password = $_POST['password'];

if ($link === false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    return;
} else {
    $sql = "insert into user (login, password) values (?, ?)";
    $stmt = $link->prepare($sql);
    $stmt->bind_param('ss', $login, $password);
    if($stmt->execute()){
        $result = $link->insert_id;
        print $result;
    }
}
$link->close();

