$( document ).ready(function() {
    var hamburger = $('#hamburger-icon');
    hamburger.click(function(e) {
        hamburger.toggleClass('active');
        $("#nav-control").toggleClass("menu-open");
        $( ".nav-control > .wrapper" ).slideToggle( "slow" );
        e.stopPropagation();
        if ($("#nav-control").offset().top < 50){
            $("#nav-control").toggleClass("scrolled");
            $(".logo").toggleClass("scrolled");
        }
        return false;
    });
    $('.link>.page-scroll').click(function(e){
        hamburger.toggleClass('active');
        $("#nav-control").toggleClass("menu-open");
        $( ".nav-control > .wrapper" ).slideToggle( "slow" );
    })

    $(document).click(function() {
        if(hamburger.hasClass('active')){
            hamburger.toggleClass('active');
            $("#nav-control").toggleClass("menu-open");
            $( ".nav-control > .wrapper" ).slideToggle( "slow" );
        }

    });

    $(window).scroll(function() {
        if(!hamburger.hasClass('active')){
            if ($("#nav-control").offset().top > 50) {
                $("#nav-control").addClass("scrolled");
                $(".logo").addClass("scrolled");
            } else {
                $("#nav-control").removeClass("scrolled");
                $(".logo").removeClass("scrolled");
            }
        }


    });
});