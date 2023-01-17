(function ($) {
"use strict";

// preloader
setTimeout(function(){
    $('.preloader').fadeToggle();
  });

// mobile menu 
$(document).ready(function(){
	$(".mobile-menu-click").click(function(){
	  $(".mobile-menu-sidebar-wrapper").addClass("sidebar-active");
	});
  });

  $(document).ready(function(){
	$(".mobile-bar-close-icon").click(function(){
	  $(".mobile-menu-sidebar-wrapper").removeClass("sidebar-active");
	});
  });
// mobile menu end---------------------------------

// feaute-slider-active
var swiper = new Swiper(".feature-slider-active", {
	slidesPerView: 3,
	spaceBetween: 10,
	pagination: {
	  el: ".feature-slide-btn",
	  clickable: true,
	},
	breakpoints: {
	  320: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  768: {
		slidesPerView: 1,
		spaceBetween: 40,
	  },
	  1024: {
		slidesPerView: 3,
		spaceBetween: 50,
	  },
	},
  });
// feaute-slider-active end -----------------------------

//why campfire title color and icon active

  $(document).ready(function(){
	$(".click-img-add-1").click(function(){
	  $(".title-color-add-1").addClass("title-color-add-active");
	});
  });

  $(document).ready(function(){
	$(".click-img-add-1").click(function(){
	  $(".title-color-add-2 , .title-color-add-3").removeClass("title-color-add-active");
	});
  });


  $(document).ready(function(){
	$(".click-img-add-2").click(function(){
	  $(".title-color-add-2").addClass("title-color-add-active");
	});
  });

  $(document).ready(function(){
	$(".click-img-add-2").click(function(){
	  $(".title-color-add-1 , .title-color-add-3").removeClass("title-color-add-active");
	});
  });


  $(document).ready(function(){
	$(".click-img-add-3").click(function(){
	  $(".title-color-add-3").addClass("title-color-add-active");
	});
  });

  $(document).ready(function(){
	$(".click-img-add-3").click(function(){
	  $(".title-color-add-2 , .title-color-add-1").removeClass("title-color-add-active");
	});
  });
// ----------------------------------------------------------


// faq-active
$(document).ready(function(){
	$(".faq-click-active-1").click(function(){
	  $(".faq-subtitle-style-1 , .faq-click-active-1 ").toggleClass("faq-subtitle-active  faq-icon-style");
	});
  });

  $(document).ready(function(){
	$(".faq-click-active-2").click(function(){
	  $(".faq-subtitle-style-2 , .faq-click-active-2 ").toggleClass("faq-subtitle-active  faq-icon-style");
	});
  });

  $(document).ready(function(){
	$(".faq-click-active-3").click(function(){
	  $(".faq-subtitle-style-3 , .faq-click-active-3 ").toggleClass("faq-subtitle-active  faq-icon-style");
	});
  });

  $(document).ready(function(){
	$(".faq-click-active-4").click(function(){
	  $(".faq-subtitle-style-4 , .faq-click-active-4 ").toggleClass("faq-subtitle-active  faq-icon-style");
	});
  });

  $(document).ready(function(){
	$(".faq-click-active-5").click(function(){
	  $(".faq-subtitle-style-5 , .faq-click-active-5 ").toggleClass("faq-subtitle-active  faq-icon-style");
	});
  });

  $(document).ready(function(){
	$(".faq-click-active-6").click(function(){
	  $(".faq-subtitle-style-6 , .faq-click-active-6 ").toggleClass("faq-subtitle-active  faq-icon-style");
	});
  });

  $(document).ready(function(){
	$(".faq-click-active-7").click(function(){
	  $(".faq-subtitle-style-7 , .faq-click-active-7 ").toggleClass("faq-subtitle-active  faq-icon-style");
	});
  });

  $(document).ready(function(){
	$(".faq-click-active-8").click(function(){
	  $(".faq-subtitle-style-8 , .faq-click-active-8 ").toggleClass("faq-subtitle-active  faq-icon-style");
	});
  });

  $(document).ready(function(){
	$(".faq-click-active-9").click(function(){
	  $(".faq-subtitle-style-9 , .faq-click-active-9 ").toggleClass("faq-subtitle-active  faq-icon-style");
	});
  });

  $(document).ready(function(){
	$(".faq-click-active-10").click(function(){
	  $(".faq-subtitle-style-10 , .faq-click-active-10 ").toggleClass("faq-subtitle-active  faq-icon-style");
	});
  });

  $(document).ready(function(){
	$(".faq-click-active-11").click(function(){
	  $(".faq-subtitle-style-11 , .faq-click-active-11 ").toggleClass("faq-subtitle-active  faq-icon-style");
	});
  });
// ---------------------------------------------------------------

  
// why campfire img add active
  $(document).ready(function(){
	$(".click-img-add-1").click(function(){
	  $(".why-campfire-box-wrapper-1").addClass("campfire-img-1-active");
	});
  });
  $(document).ready(function(){
	$(".click-img-add-1").click(function(){
	  $(".why-campfire-box-wrapper-2 , .why-campfire-box-wrapper-3").removeClass("campfire-img-2-active ,campfire-img-3-active");
	});
  });

  $(document).ready(function(){
	$(".click-img-add-2").click(function(){
	  $(".why-campfire-box-wrapper-2").addClass("campfire-img-2-active");
	});
  });
  $(document).ready(function(){
	$(".click-img-add-2").click(function(){
	  $(".why-campfire-box-wrapper-1, .why-campfire-box-wrapper-3").removeClass("campfire-img-1-active , campfire-img-3-active");
	});
  });

  $(document).ready(function(){
	$(".click-img-add-3").click(function(){
	  $(".why-campfire-box-wrapper-3").addClass("campfire-img-3-active");
	});
  });
  $(document).ready(function(){
	$(".click-img-add-3").click(function(){
	  $(".why-campfire-box-wrapper-1 , .why-campfire-box-wrapper-2").removeClass("campfire-img-2-active , campfire-img-1-active");
	});
  });
// ---------------------------------------------------------------

// why campfire inner img add active
$(document).ready(function(){
	$(".click-img-add-1").click(function(){
	  $(".why-box-img-wrapper-1").addClass("why-inner-img-1");
	});
  });

  $(document).ready(function(){
	$(".click-img-add-2").click(function(){
	  $(".why-box-img-wrapper-2").addClass("why-inner-img-2");
	});
  });

  $(document).ready(function(){
	$(".click-img-add-3").click(function(){
	  $(".why-box-img-wrapper-3").addClass("why-inner-img-3");
	});
  });


// ---------------------------------------------------------------

// use-it-slider-active
var swiper = new Swiper(".use-it-slider-active", {
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	loop: true,
	  navigation: {
		nextEl: ".use-it-slider-btn",
	  },
	  breakpoints: {
		320: {
		  slidesPerView: 1,
		  spaceBetween: 20,
		},
		768: {
		  slidesPerView: 1,
		  spaceBetween: 40,
		},
		1024: {
		  slidesPerView: 3,
		  spaceBetween: 50,
		},
	  },
  });



// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();

var navexpander = $('#nav-expander, #nav-expander2');
if(navexpander.length){
	$('#nav-expander, #nav-expander2, #nav-close, #nav-close2, .offwrap').on('click',function(e){
		e.preventDefault();
		$('body').toggleClass('nav-expanded');
	});
}

sliderActive();
projectSlider();
testimonialActive();
recentProjectActive();
sliderTestimonialActive();
brandActive();


})(jQuery);