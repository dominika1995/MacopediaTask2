$(document).ready(function(){

    /* ======================================================= *
                               NAVBAR
     ==========================================================*/
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

    /* ======================================================= *
                                 MAP
     ==========================================================*/

    var modal = document.getElementById('box');

    var btn = document.getElementById("myBtn");

    var span = document.getElementsByClassName("map__box--content--close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
        getLocation();
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        var lat = position.coords.latitude
        var lng = position.coords.longitude;
        var posit = {lat: lat, lng: lng};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: posit
        });
        var marker = new google.maps.Marker({
            position: posit,
            map: map,
        });
    }

    /* ======================================================= *
                            COUNTERS
     ==========================================================*/

    $(function($, win) {
        $.fn.inViewport = function(cb) {
            return this.each(function(i,el){
                function visPx(){
                    var H = $(this).height(),
                        r = el.getBoundingClientRect(),
                        t=r.top,
                        b=r.bottom;
                    return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
                } visPx();
                $(win).on("resize scroll", visPx);
            });
        };
    }(jQuery, window));

    jQuery(function($) {
        $(".numbers__div__count").inViewport(function(px) {
            if(px>0 && !this.visibilityFlag) {
                this.visibilityFlag = true;
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            }
        });

    });

    /* ======================================================= *
                                 ACCORDION
     ==========================================================*/

    $( window ).resize(function() {
        var height = $(".service__details__photo > img").height();
        var width = $(window).width();
        if((width>992) && (width<1200)){
            var maxHeight = height - 230;
            $('.panel-body').css('max-height', maxHeight + "px");
        }
        else{
            $('.panel-body').css('max-height', '200px');
        }
    });
    $('.panel-heading a').on('click',function(e){
        if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
            e.preventDefault();
            e.stopPropagation();
        }
    });
    window.dispatchEvent(new Event('resize'));

});