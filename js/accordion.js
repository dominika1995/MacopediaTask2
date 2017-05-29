$( document ).ready(function() {
  $( window ).resize(function() {
    var height = $(".service__details__photo > img").height();
    var width = $(window).width();
    if((width>992) && (width<1200)){
      var maxHeight = height - 230;
      $('.panel-body').css('max-height', `${maxHeight}px`);
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
