$(document).ready(function(){
    $(".collapsed-blue").on('click', function() {
        if($(".navbar").hasClass("navbar-xs")){
            $(".navbar").removeClass("navbar-xs");
            $(".collapsed-blue").removeClass("navbar-arrow");
            $(".collapsed-blue").addClass("navbar-toggle");
        }
        else{
            $(".navbar").addClass("navbar-xs");
            $(".collapsed-blue").removeClass("navbar-toggle");
            $(".collapsed-blue").addClass("navbar-arrow");
        }
    });
});




