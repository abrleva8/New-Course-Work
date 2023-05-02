$(document).ready(function(){
    $.get("head_page.html", function(data) {
        $("#header").html(data);
    });
});

$(document).ready(function () {
    $.get("footer_page.html", function(data) {
        $("footer").html(data)
    })
})