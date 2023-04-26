
var car_img = $("#carousel_img")
var car_title = $("#carousel_title")
var car_desc = $("#carousel_desc")

var titles = ["Горе от ума", "11/22/63", "1984"]
var images = ["griboedov_gore_ot_uma_icon.svg", "11_22_63.svg", "1984.svg"]
var descriptions = ["«Горе от ума» – шедевр русской литературы, произведение, раздерганное на цитаты и крылатые фразы чуть не от\n" +
"\t\t\t\t\tпервого до последнего слова.\n" +
"\t\t\t\t\tНе потому ли горькая, язвительная и блестящая комедия Грибоедова по-прежнему актуальна и по сей день не сходит\n" +
"\t\t\t\t\tс лучших театральных сцен нашей страны?",

    "Убийство президента Кеннеди стало самым трагическим событием американской истории ХХ века. Тайна его до сих пор не раскрыта. Но что, если случится чудо? Если появится возможность отправиться в прошлое и предотвратить катастрофу? Это предстоит выяснить обычному учителю из маленького городка Джейку Эппингу, получившему доступ к временному порталу. Его цель – спасти Кеннеди. Но какова будет цена спасения?",

    "Своеобразный антипод второй великой антиутопии XX века - \"О дивный новый мир\" Олдоса Хаксли. Что, в сущности, страшнее: доведенное до абсурда \"общество потребления\" - или доведенное до абсолюта \"общество идеи\"? По Оруэллу, нет и не может быть ничего ужаснее тотальной несвободы...\n"]


function set_carousel($id){
    id_car = $id
    set_selector_colors()
    car_title.text(titles[$id])
    car_img.attr('src', "../img/" + images[$id])
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