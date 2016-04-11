function when_panel_clicked() {
    alert("You clicked on panel!!")
}

function on_page_ready() {
    $(".panel").click(when_panel_clicked)    
}

$(document).ready(on_page_ready)















// var y = 7;

// function function_name() {
//     var x = 5+y;
//     var s = "hello";
//     y+=x;

//     if (y>11) {
//         s+="yaya"
//         console.log("this is awesome")
//     }
//     for (var i = 0; i <10; i++){
//         console.log("prints")
//     }
// }
// function_name()