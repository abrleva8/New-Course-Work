<?php

//TODO: поменять пароль
$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "knigopoisk");

$id_book = $_POST['id_book'];
$id_user = $_POST['id_user'];
$rate = $_POST['rate'];

if ($link === false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    return;
} else {
    $sql = "replace into user_books
            set id_book = ?, id_user = ?, rate = ?";
    $stmt = $link->prepare($sql);
    $stmt ->bind_param("iii", $id_book, $id_user, $rate);
    if (!mysqli_stmt_execute($stmt)) {
        printf("Ошибка!!!");
    }
}

$link->close();
