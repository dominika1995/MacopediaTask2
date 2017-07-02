

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
          if($(window).width()<768){
            $(".navbar").addClass("navbar--visible");
            $(".navbar__img").fadeIn(500);
          }
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
          $(".navbar").removeClass("navbar--visible");
          if($(window).width()<768){
          $(".navbar__img").fadeOut(500);
        }
      }

  });

});
