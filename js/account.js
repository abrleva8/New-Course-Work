
function check_parameters($email, $password) {
    if ($email === ""){
        alert("Введите логин")
    }
    if ($password === ""){
        alert("Введите пароль")
    }
    if (!validate_email($email))
        alert("Почта некорректная!")
}

function validate_email($email) {
    let email_reg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return email_reg.test($email);
}

$("#enter").click(function () {
    let login = $("#login_user").val()
    let password = $("#password_user").val()
    enter_in_account(login, password)
})

$("#register").click(function () {
    let login = $("#login_user").val()
    let password = $("#password_user").val()
    check_parameters(login, password)
    add_account(login, password)
})

function add_account($login, $password){
    $.ajax({
        type: "POST",
        url: "../php/add_account.php",
        async: false,
        data: {login: $login, password: $password}
    })
        .done(function (data) {
            if (!isNaN(data)) {
                localStorage.setItem("account_id", data)
                localStorage.setItem("login", $login)
                open("main.html", "_self")
            }
            else {
                alert("Такой логин уже существует!")
            }
        });
}

function enter_in_account($login, $password){
    $.ajax({
        type: "GET",
        url: "../php/select_account.php",
        async: false,
        data: {login: $login, password: $password}
    })
        .done(function (data) {
            if (data === "")
            {
                alert("Логин или пароль введен неверно!")
            }
            else if (!isNaN(data)) {
                localStorage.setItem("account_id", data)
                localStorage.setItem("login", $login)
                open("main.html", "_self")
            }
        });
}

