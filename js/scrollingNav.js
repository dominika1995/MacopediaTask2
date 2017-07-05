$(document).ready(function(){
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
          $(".navbar-right").removeClass("menu");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
          $(".navbar-right").addClass("menu");
          $(".navbar").removeClass("navbar--visible");
      }
  });
    $('.navbar-toggle').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 100);
    });
});
