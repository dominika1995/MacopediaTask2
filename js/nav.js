$(document).ready(function(){
    $(".navbar-toggle").on('click', function() {
        if($(".navbar").hasClass("navbar-xs")){
            $(".navbar").removeClass("navbar-xs");
            //$(".collapsed-blue").addClass("navbar-toggle");
            //$(".collapsed-blue").removeClass("navbar-arrow");
        }
        else{
            //$(".navbar").removeClass("navbar-xs");
            $(".navbar").addClass("navbar-xs");
            //$(".collapsed").removeClass("navbar-toggle");
            //$(".collapsed").addClass("navbar-arrow");
        }
    });




    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

});


