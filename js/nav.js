$(document).ready(function(){
    $(".navbar-toggle").on('click', function() {
        if($(".navbar").hasClass("top-xs")){
            $(".navbar").removeClass("top-xs");
            $(".nav").addClass("menu");
            //$(".collapsed").addClass("navbar-toggle");
            //$(".collapsed").removeClass("navbar-arrow");
        }
        else{
            $(".navbar").addClass("top-xs");
            $(".nav").removeClass("menu");
            //$(".collapsed").removeClass("navbar-toggle");
            //$(".collapsed").addClass("navbar-arrow");
        }
    });

    $(".navbar-nav>li>a").on('click',function(){
        if($(window).width()<768){
            alert("tutaj");
            $("button").attr("aria-expanded","false");
        }
    });



});

