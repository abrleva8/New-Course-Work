let rate = 0
function rateClick(el) {
    rate = el.value
    const x = $("#rate_text")
    const delete_button = $("#delete_button")
    x.html("Your rating: " + rate)
    delete_button.css({'font-size':12})
}

function deleteClick(el) {

    const x = $("#rate_text")
    const delete_button = $("#delete_button")
    x.html("Your rating: ")
    delete_button.css({'font-size':0})

    for (let i = 1; i <= rate; i++) {
        let right_id = "#star" + i
        let t = $(right_id)
        t.prop("checked", false);
    }

    rate = 0
}