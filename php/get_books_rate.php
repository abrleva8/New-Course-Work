<?php

//TODO: поменять пароль
$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "knigopoisk");

$id_book = $_GET['id_book'];

if ($link === false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    return;
} else {
    $sql = " select round(avg(rate), 2)
             from user_books
             where id_book = ?";
    $stmt = $link->prepare($sql);
    $stmt->bind_param('i', $id_book);
    if (mysqli_stmt_execute($stmt)) {
        mysqli_stmt_bind_result($stmt, $col1);
        while (mysqli_stmt_fetch($stmt)) {
            //TODO: подумать над \n
            printf("%s\n", $col1);
        }
    } else {
        printf("Ошибка!!!");
    }
}

$link->close();
