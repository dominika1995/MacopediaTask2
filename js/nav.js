$( document ).ready(function() {
    var hamburger = $('#hamburger-icon');
    hamburger.click(function(e) {
        hamburger.toggleClass('active');
        $("#nav-control").toggleClass("menu-open");
        $( ".nav-control > .wrapper" ).slideToggle( "slow" );
        e.stopPropagation();
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
});