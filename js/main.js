function open_book() {
    let id = $(".id_book").attr('id')
    localStorage.setItem("current_book", id)
    open("book_page.html", "_self")
}

