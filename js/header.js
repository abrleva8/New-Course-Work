$(window).load(function () {
    var button = $(".login")
    if (localStorage.getItem("login") !== null) {
        button.text(localStorage.getItem("login"))
        button.on('click', exit_button)
    }
    else {
        button.text("Войти")
        button.on('click', open_login)
    }

})

function exit_button() {
    localStorage.clear()
    open("../html/main.html", "_self")
}

function open_login() {
    open("../html/login.html", "_self")
}
