console.log("JS: Ready");

$(document).ready(function(){
  $(".menu-btn").click(function(){
    $(".menu").toggle();
  });

  $(".menu-btn").click(function(){
    $(".menu-btn").toggleClass("btnMenuClicked");
  });

  $(".scroll-down").click(function(){
      $("html, body").animate({
          scrollTop:$(".our-goal").offset().top
      }, 3000);
  });


});
