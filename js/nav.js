
$(document).ready(function(){


    var hamburger = $('#hamburger-icon');
    hamburger.click(function(e) {
        hamburger.toggleClass('active');
        $('body').toggleClass('with--sidebar');
        return false;
    });



    $(window).scroll(function() {
        if ($(".header").offset().top > 50) {
            $(".header").addClass("scrolled");
        } else {
            $(".header").removeClass("scrolled");
        }
        var top = $(".header").offset().top;
        console.log('top:  ' + top);
        for(var i = 2;i<7;i++){
            var $anchor = $(".page-scroll:nth-child(" + i +")");
            var topEl = $($anchor.attr('href')).offset().top;
            var bottomEl = $($anchor.attr('href')).offset().top + $($anchor.attr('href')).height();
            $anchor.removeClass('active');
            if(((top+300)>topEl) && ((top+150)<bottomEl)){
                $anchor.addClass('active');
                console.log('added');
            }
        }

    });
    $('#site-cache').click(function(e){
        $('body').removeClass('with--sidebar');
        hamburger.toggleClass('active');

    });

    $(document).on('click', 'a.page-scroll', function(event) {
        $('body').removeClass('with--sidebar');
        hamburger.removeClass('active');
        var $anchor = $(this);
        var top = $($anchor.attr('href')).offset().top;
        if($(window).width()<768){
            setTimeout(function () {
                console.log("animating");

                $('html').stop().animate({
                    scrollTop: top-48,
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            }, 300);
        }
        else{
            $('html, body').stop().animate({
                scrollTop: top-48,
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        }




    });

});









// $( document ).ready(function() {
//
//     var hamburger = $('#hamburger-icon');
//     hamburger.click(function(e) {
//         hamburger.toggleClass('active');
//         $("#nav-control").toggleClass("menu-open");
//         $( ".nav-control > .wrapper" ).slideToggle( "slow" );
//         e.stopPropagation();
//         if ($("#nav-control").offset().top < 50){
//             $("#nav-control").toggleClass("scrolled");
//             $(".logo").toggleClass("scrolled");
//         }
//         return false;
//     });
//     $('.link>.page-scroll').click(function(e){
//         hamburger.toggleClass('active');
//         $("#nav-control").toggleClass("menu-open");
//         $( ".nav-control > .wrapper" ).slideToggle( "slow" );
//     })
//
//     $(document).click(function() {
//         if(hamburger.hasClass('active')){
//             hamburger.toggleClass('active');
//             $("#nav-control").toggleClass("menu-open");
//             $( ".nav-control > .wrapper" ).slideToggle( "slow" );
//         }
//
//     });
//
//     $(window).scroll(function() {
//         if(!hamburger.hasClass('active')){
//             if ($("#nav-control").offset().top > 50) {
//                 $("#nav-control").addClass("scrolled");
//                 $(".logo").addClass("scrolled");
//             } else {
//                 $("#nav-control").removeClass("scrolled");
//                 $(".logo").removeClass("scrolled");
//             }
//         }
//
//
//     });
// });