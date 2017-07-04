

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
          $(".navbar").removeClass("navbar--visible");
      }

  });

    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        var top = $($anchor.attr('href')).offset().top;
        console.log(top);
        $('html, body').stop().animate({
            scrollTop: top-48,
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

});
