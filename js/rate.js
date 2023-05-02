let rate = 0
function set_stars($rate = null) {
    const rateText = $("#rate_text")
    rateText.html("Your rating: " + ($rate ?? ""))
    const delete_button = $("#delete_button")
    if ($rate !== null)
        delete_button.css({"display": "block" })
    else {
        delete_button.css({"display": "none" })
        for (let i = 1; i <= rate; i++) {
            $("#star" + i).prop("checked", false)
        }
        rate = 0
    }
}

function rate_click(el) {
    rate = el.value
    set_stars(rate)
}