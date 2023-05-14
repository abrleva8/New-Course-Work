$(window).load(function () {
    let title = $("#title_book")
    let description = $("#description_book")
    let picture = $("#picture_book")
    get_books_data(title, description, picture)
})

function get_books_data($title, $description, $picture){
    $.ajax({
        type: "GET",
        url: "../php/get_books_info.php",
        data: {id_book: localStorage.getItem("current_book")},
    })
        .done(function (data) {
            if (data === "Ошибка!!!") {
                alert("Произошла ошибка!")
            }
            else {
               /* var result = data.split(',');*/
                var [a, b, c] = data.split('#');
                $title.text(a);
                $description.text(b);
                $picture.attr("src", c);
            }
        });
}