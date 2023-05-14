$(document).ready(function () {
    $(".login").text(localStorage.getItem("login") ?? "Войти")
})
