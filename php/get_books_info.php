<?php

//TODO: поменять пароль
$link = mysqli_connect("localhost",
    "root",
    "31August2008",
    "knigopoisk");

$id = $_GET['id_book'];

if ($link === false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    return;
}
else {
    $sql = "select book_name, book_description, book_image_source
    from books
    where id_book = ?";
    $stmt = $link->prepare($sql);
    $stmt->bind_param('i', $id);
    if (mysqli_stmt_execute($stmt)) {
        mysqli_stmt_bind_result($stmt, $col1, $col2, $col3);
        while (mysqli_stmt_fetch($stmt)) {
            //TODO: подумать над \n
            printf("%s#%s#%s\n", $col1, $col2, $col3);
        }
    }
    else printf("Ошибка!!!");
}

$link->close();
