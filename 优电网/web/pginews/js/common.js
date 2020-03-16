$(document).ready(function(){
    var $fontSizeB = $("#fontSizeB");
    var $fontSize2 = $("#fontSize2");
    var $fontSizeS = $("#fontSizeS");

    var main = $(".main_title");


    $fontSizeB.on('click',function(){
        $fontSizeB.siblings().removeClass("red")
        $fontSizeB.addClass("red");
        main.removeClass("font02 fontSma");
        main.addClass("fontBig");
    })


    $fontSize2.on('click',function(){
        $fontSize2.siblings().removeClass("red")
        $fontSize2.addClass("red");
        main.removeClass("fontBig fontSma");
        main.addClass("font02");
    })


    $fontSizeS.on('click',function(){
        $fontSizeS.siblings().removeClass("red")
        $fontSizeS.addClass("red");
        main.removeClass("fontBig font02");
        main.addClass("fontSma");
    })
})			
