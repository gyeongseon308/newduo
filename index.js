$(document).ready(function(){
  $("#header").mouseover(function(){
    $(".header_wrap").stop().animate({"height":"250px"})
    $(".header_wrap").css({"background-color":"#ffffff45"})
  });
  $("#header").mouseleave(function(){
    $(".header_wrap").stop().animate({"height":"50px"})
    $(".header_wrap").css({"background-color":"#ffffff00"})
  });

  $(".q_menu").click(function(){
    $(".q_list").slideToggle()
  });

    $(".in_btn>li").click(function(){
      let list = $(this).index();
      $(".in_left>li").stop().fadeOut();
      $(".in_right>li").stop().fadeOut();
      $(".in_left>li").eq(list).stop().fadeIn();
      $(".in_right>li").eq(list).stop().fadeIn();
      $(".in_btn>li").removeClass("on")
      $(this).addClass("on")
    });

  //Quick메뉴

    $(window).scroll(function(){
      if($(this).scrollTop() > 400){
          $("#quickmenu").stop().fadeIn(100);
      }else{
          $("#quickmenu").stop().fadeOut(100);
      }
  });
  
  $(".top").click(function(){
      $("html,body").animate({scrollTop : 0}, 800);
  });
  

  $('#quickmenu .q_menu').click(function(){
    $('#quickmenu .q_list>li').fadeToggle(200); // 리스트 항목을 부드럽게 나타내거나 숨김
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
            } else {
              entry.target.classList.remove("fade-in");
              }
            });
          },
          { threshold: 0.5}
        );
        const targetElements = document.querySelectorAll(".couplemanager");
        targetElements.forEach((element) => {
          observer.observe(element);
        });

});
  
