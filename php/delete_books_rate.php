<?php

//TODO: поменять пароль
$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "knigopoisk");

$id_book = $_POST['id_book'];
$id_user = $_POST['id_user'];

if ($link === false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    return;
} else {
    $sql = "delete 
            from user_books
            where id_book = ? and id_user = ?";
    $stmt = $link->prepare($sql);
    $stmt ->bind_param("ii", $id_book, $id_user);
    if (!mysqli_stmt_execute($stmt)) {
        printf("Ошибка!!!");
    }
}

$link->close();
