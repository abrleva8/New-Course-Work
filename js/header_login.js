$(window).load(function () {
    var login = localStorage.getItem("login")
    $(".login").text((login === undefined) ? "Войти" : "Выйти")
    setTimeout(function () {

    }, 500)
})
