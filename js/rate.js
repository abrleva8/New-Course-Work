let rate = 0
function set_stars($rate = null) {
    const rateText = $("#rate_text")
    rateText.html("Ваша оценка: " + ($rate ?? ""))
    const delete_button = $("#delete_button")
    if ($rate !== null && $rate !== ""){
        for (let i = 1; i <= $rate; i++) {
            $("#star" + i).prop("checked", true)
        }
        delete_button.css({"display": "block" })
    }
    else {
        delete_button.css({"display": "none" })
        for (let i = 1; i <= 10; i++) {
            $("#star" + i).prop("checked", false)
        }
        rate = 0
    }
}

function rate_click(el) {
    if (localStorage.getItem("account_id") === null){
        alert("Для выставления оценки авторизуйтесь!")
        set_stars()
        return
    }
    rate = el.value
    set_rate(rate)
    set_stars(rate)
}

$(window).load(function () {
    var id_user = localStorage.getItem("account_id")
    if (id_user !== null)
        $.ajax({
            type: "GET",
            url: "../php/get_books_rate_user.php",
            async: false,
            data: {id_book: localStorage.getItem("current_book"), id_user: id_user}
            }
        )
            .done(function (data) {
                set_stars(data)
            })
    $.ajax({
            type: "GET",
            url: "../php/get_books_rate.php",
            async: false,
            data: {id_book: localStorage.getItem("current_book")}
        }
    )
        .done(function (data) {
            $("#avg_rate_text").text("Средняя оценка: " + data)
        })
    }

)

function delete_rate() {
    var id_user = localStorage.getItem("account_id")
    if (id_user === null)
        return;
    $.ajax({
            type: "POST",
            url: "../php/delete_books_rate.php",
            async: false,
            data: {id_book: localStorage.getItem("current_book"), id_user: id_user}
        }
    )
    set_stars()
}

function set_rate($rate) {
    var id_user = localStorage.getItem("account_id")
    if (id_user === null)
        return;
    $.ajax({
            type: "POST",
            url: "../php/add_books_rate.php",
            async: false,
            data: {id_book: localStorage.getItem("current_book"), id_user: id_user, rate: $rate}
        }
    )
}