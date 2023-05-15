$(window).load(function () {
    $(".login").text(localStorage.getItem("login") ?? "Войти")
    setTimeout(this, 5)
})
