$(document).ready(function(){

  $(".header_wrap").mouseover(function(){
      $(".header_wrap").stop().animate({"height":"250px"})
      $(".header_wrap").css({"background-color":"#ffffff45"})
    });
      $(".header_wrap").mouseleave(function(){
        $(".header_wrap").stop().animate({"height":"50px"})
        $(".header_wrap").css({"background-color":"#ffffff00"})
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
          { threshold: 0.5 }
        );
        const targetElements = document.querySelectorAll(".main2_conts");
        targetElements.forEach((element) => {
          observer.observe(element);
        });
        

  $(".analyze_menu>li").mouseenter(function(){
    let list = $(this).index();

    $(".analyze_conts>li").stop().fadeOut();
    $(".analyze_conts>li").eq(list).stop().fadeIn();

    $(".analyze_menu>li").removeClass("active");
    $(".analyze_menu>li").eq(list).addClass("active");
  });

  document.querySelectorAll('.tab_box').forEach(function(tab, index) {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.conts_box').forEach(function(content) {
        content.style.display = 'none';
      });
      document.querySelectorAll('.conts_box')[index].style.display = 'block';
    });
  });

  
  $(".arrow>.next").click(function(){
    $(".youtube_tab").stop().animate({"margin-left":"-1400px"},500, function(){
      $(".youtube_tab>li:first-child").appendTo(".youtube_tab");
      $(".youtube_tab").css({"margin-left":"-700px"});
    });
  });
  
  $(".arrow>.previous").click(function(){
    $(".youtube_tab").stop().animate({"margin-left":"0px"}, 500, function(){
      $(".youtube_tab>li:last-child").prependTo(".youtube_tab");
      $(".youtube_tab").css({"margin-left":"-700px"});
    });
  });

  
  function nextSlide(){
    $(".youtube_tab").stop().animate({"margin-left":"-1400px"},500, function(){
      $(".youtube_tab>li:first-child").appendTo(".youtube_tab");
      $(".youtube_tab").css({"margin-left":"-700px"});
    });
  };

    let autoSlide = setInterval(function(){
    let i = 0;
    let count = $(".youtube_tab>li").length;

    if(i == count-1){
      i=0;
    }
    else{
      i++;
    }
    nextSlide()
  }, 4000);
  

  $(".tab_slide").mouseenter(function(){
    clearInterval(autoSlide);  
    });
    $(".tab_slide").mouseleave(function(){
      autoSlide = setInterval(function(){
          nextSlide()
      },4000);
    });
  




});