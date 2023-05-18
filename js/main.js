function open_book($id) {
    let id;
    if ($id == null) {
        id = $(".id_book").attr('id')
    } else {
        id = $id
    }
    localStorage.setItem("current_book", id)
    open("book_page.html", "_self")
}

