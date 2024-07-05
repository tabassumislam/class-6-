/*----------------------------------------
 Course Landing page
---------------------------------------*/
$(document).ready(function(){
  // Progress Bar Section
  $(".step").click( function() {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
  });
  $(".step01").click( function() {
    $("#line-progress").css("width", "4%");
    $(".content01").addClass("active").siblings().removeClass("active");
  });
  $(".step02").click( function() {
    $("#line-progress").css("width", "25%");
    $(".content02").addClass("active").siblings().removeClass("active");
  });
  $(".step03").click( function() {
    $("#line-progress").css("width", "50%");
    $(".content03").addClass("active").siblings().removeClass("active");
  });
  $(".step04").click( function() {
    $("#line-progress").css("width", "75%");
    $(".content04").addClass("active").siblings().removeClass("active");
  });
  $(".step05").click( function() {
    $("#line-progress").css("width", "100%");
    $(".content05").addClass("active").siblings().removeClass("active");
  });

});



//Scroll To The Top Button 
$(".scroll-top").click(function() {
  $("html, body").animate({ 
      scrollTop: 0 
  }, "slow");
    return true;
  });

  // Sidebar Menu Active Code
  $('.ln-tab-options li a').on('click', function(){
      $('.ln-tab-options li a').removeClass('active');
      $(this).addClass('active');
  });




// $(function() { // document ready
//     var stickerTop = parseInt($('#sticker').offset().top);
//     $(window).scroll(function() {
//       $("#sticker").css((parseInt($(window).scrollTop()) + parseInt($("#sticker").css('margin-top')) > stickerTop) ? {
//           position: 'fixed',
//           z-index: 10,
//           top: '100px'
//       } : {
//           position: 'relative'
//       });
//     });
// });

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var scrollBottom = $(window).scrollTop() > (document.body.scrollHeight - 1650);


    if (scroll>=700) {
        if (!scrollBottom) {
            $(".ln-tab-panel").addClass("menulist");
        } else {
            $(".ln-tab-panel").removeClass("menulist");
        }
    }else{
        $(".ln-tab-panel").removeClass("menulist");
  }
});



(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 56)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

})(jQuery); // End of use strict



(function($) {
  // Student Success Stories
  $('.success-slider').owlCarousel({
    items: 1,
    loop: true, 
    autoplay: false,
    autoplayTimeout:8000,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    },
  });

  // News Coverage Slider
  $('.news-slider').owlCarousel({
    items: 1,
    loop: true, 
    autoplay: false,
    autoplayTimeout:8000,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    },
  });
})(jQuery);