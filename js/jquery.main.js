jQuery(function(){
  inithover();
  initscroll();
});


// hover dropdown

function inithover() {
  $('body').on('mouseenter mouseleave','.dropdown',function(e){
    var _d=$(e.target).closest('.dropdown');_d.addClass('show');
    setTimeout(function(){
      _d[_d.is(':hover')?'addClass':'removeClass']('show');
    },300);
  });
}

function initscroll() {
  $(document).ready(function() {

    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
      var topPos = $(this).scrollTop();
      if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
      } else {
        $(scrollTop).css("opacity", "0");
      }
    });

    $(scrollTop).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

  });
}