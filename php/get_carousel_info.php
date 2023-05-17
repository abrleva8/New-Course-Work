<?php

$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "knigopoisk");

if ($link === false) {
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    return;
} else {
    $sql = "SELECT id_book, book_name, book_description, book_image_source
            FROM books
            ORDER BY RAND()
            LIMIT 3";
    $stmt = $link->prepare($sql);
    if (mysqli_stmt_execute($stmt)) {
        mysqli_stmt_bind_result($stmt, $col1, $col2, $col3, $col4);
        while (mysqli_stmt_fetch($stmt)) {
            printf("%s#%s#%s#%s~", $col1, $col2, $col3, $col4);
        }
    } else {
        printf("Ошибка!!!");
    }
}

$link->close();
