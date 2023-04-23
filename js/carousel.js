
var car_img = $("#carousel_img")
var car_title = $("#carousel_title")
var car_desc = $("#carousel_desc")

var titles = ["Горе от ума", "11/22/63", "1984"]
var images = ["gore_ot_uma_icon.svg", "11_22_63.svg", "1984.svg"]


function set_carousel($id){
    id_car = $id
    set_selector_colors()
    car_title.text(titles[$id])
    car_img.attr('src', "../img/" + images[$id])
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