
var car_img = $("#carousel_img")
var car_title = $("#carousel_title")
var car_desc = $("#carousel_desc")
var car_id = $(".id_book")

var titles = [];
var images = [];
var descriptions = [];

$(window).load(function () {
    get_carousel_data()
})

function get_carousel_data(){
    $.ajax({
        type: "GET",
        async: false,
        url: "../php/get_carousel_info.php",
        data: {id_book: localStorage.getItem("current_book")},
    })
        .done(function (data) {
            if (data === "Ошибка!!!") {
                alert("Произошла ошибка!")
            } else {
                set_lists(data);
            }
        });
}

function set_lists(data, c='~') {
    titles = []
    images = []
    descriptions = []
    x = data.split(c)
    x.forEach((el) => {
        let current_row = el.split('#')
        titles.push(current_row[0]);
        descriptions.push(current_row[1]);
        images.push(current_row[2]);
    })
}

function set_carousel($id){
    id_car = $id
    set_selector_colors()
    car_title.text(titles[$id])
    car_img.attr('src', images[$id])
    car_id.attr('id', ($id + 1))
    car_desc.text(descriptions[$id])
    var selector = $("#selector" + $id)
    selector.attr("style","background: black")
}
var id_car = 0;

function set_selector_colors(){
    for (let i = 0; i < 3; i++) {
        var selector = $("#selector" + i)
        selector.attr("style","background: #D9D9D9")
    }
}

function timer() {
    set_carousel(id_car)
    if (id_car < 2)
        id_car++
    else id_car = 0
    setTimeout(timer,3000)
}

timer()

localStorage.setItem("name", "Левон")