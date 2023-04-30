
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

$("#register").click(function () {
    let login = $("#login_user")
    let password = $("#password_user")
    check_parameters(login.val(), password.val());
})

