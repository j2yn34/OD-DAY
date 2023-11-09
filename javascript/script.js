// 검색창 모달
$(function () {
  $(".search_icon").click(function () {
    $(".modal").fadeIn();
  });
  $(".close").click(function () {
    $(".modal").fadeOut();
  });

  // 모바일 메뉴
  // 햄버거 버튼 클릭시
  $(".fa-bars").click(function () {
    $(".mobile_container").fadeIn(200);
    $(".mobile_aside").addClass("active");
  });
  // 닫기 버튼, 배경 클릭시
  $(".mobile_close, .mobile_bg").click(function () {
    $(".mobile_container").fadeOut(200);
    $(".mobile_aside").removeClass("active");
    $(".mobile_container .mobile_nav > li > a").removeClass("active");
    $(".mobile_container .mobile_nav > li > ul").stop().slideUp(300);
  });
  // 아코디언 메뉴
  $(".mobile_container .mobile_nav > li > a").click(function () {
    if ($(window).width() <= 1024) {
      $(this).parent().siblings("li").children("a").removeClass("active");
      $(this).toggleClass("active");
      $(this).parent().siblings("li").children("ul").stop().slideUp(300);
      $(this).siblings("ul").stop().slideToggle(300);
      return false;
    }
  });
  // pc사이즈에서 없애기
  $(window).resize(function () {
    if ($(this).width() >= 1007) {
      $(".mobile_container").css({
        display: "none",
      });
    }
  });

  // 메인배너 swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 네비 드롭다운
  var $firstMenu = $(".pc_nav"),
    $header = $(".top");

  $firstMenu.mouseenter(function () {
    var width = $(window).width();
    if (width >= 1024) {
      $header.stop().animate({ height: "260px" });
      $header.addClass("on");
    }
  });

  $header.mouseleave(function () {
    var width = $(window).width();
    if (width >= 1024) {
      $header.stop().animate({ height: "56px" });
      $header.removeClass("on");
    }
  });

  // 베스트메뉴 slick
  $(".responsive").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  //인스타 플로우배너효과
  $.fn.extend({
    flowBanner: function (options) {
      var defaults = {
        control: false,
        speed: 10,
        wrapSelector: "box-flow-wrap",
      };

      var opt = $.extend(defaults, options);

      return this.each(function () {
        var o = opt;
        var left = 0;
        var timer = "";
        var speed = o.speed;
        var wrapSelector = o.wrapSelector;
        var $box = $(this);
        var $wrap = '<div class="' + wrapSelector + '"></div>';
        var $banner = $box.children("li");
        var $bannerSize = $banner.length;
        var $bannerW = $banner.outerWidth(true);

        $box.wrap($wrap);
        $box.width($bannerW * $bannerSize);
        flowPlay();

        $box
          .on("mouseenter", function () {
            flowPause();
          })
          .on("mouseleave", function () {
            flowPlay();
          });

        function flow() {
          if (Math.abs(left) >= $bannerW) {
            left = 0;
            $box.children("li").first().appendTo($box);
          }

          left = left - 1;
          $box.css({
            left: left,
          });
        }

        function flowPause() {
          clearInterval(timer);
        }

        function flowPlay() {
          timer = setInterval(flow, speed);
        }
      });
    },
  });
  $(".box-flow").flowBanner({
    control: true,
  });

  // event slick
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
  });
});

// event slick 화살표룰 ev_inner 자식요소로 이동(모바일 화살표 위치 수정 목적)
$(function () {
  const myTag = document.querySelector("#event");
  const target = document.querySelector(".ev_ul");
  // #event의 자식요소로 ev_ul의 자식요소(0번째, 1번째)를 넣음
  myTag.append(target.children[0]);
  myTag.append(target.children[1]);

  // slick 화살표에 부모요소 추가(pc 화살표 반응형 목적)
  $("#event .slick-prev").wrap("<div class='ev_arrow ev_arrow_l'></div>");
  $("#event .slick-next").wrap("<div class='ev_arrow ev_arrow_r'></div>");
  // ev_arrow_l을 arrow_cont의 자식요소로 이동
  $(".ev_arrow_l").wrap("<div class='arrow_cont'></div>");
  // ev_ul의 두번째 자식요소 ev_arrow_r를 arrow_cont의 자식요소로 이동
  const arrowCont = document.querySelector(".arrow_cont");
  arrowCont.append(myTag.children[2]);
});

// 스크롤 애니메이션
$(window).scroll(function () {
  var height = $(document).scrollTop();
  log(height);
});
function log(str) {
  $("#log").text(str);
}

$(function () {
  var storyHeight1450 = 1450;

  $(".delivery_img, .delivery_txt").hide();
  $(window).scroll(function () {
    var rollIt = $(this).scrollTop() >= storyHeight1450;
    if (rollIt) {
      $(".delivery_img, .delivery_txt").show();
    } else {
      $(".delivery_img, .delivery_txt").hide();
    }
  });

  var storyHeight1800 = 1800;

  $(".pick_img, .pick_txt").hide();
  $(window).scroll(function () {
    var rollIt = $(this).scrollTop() >= storyHeight1800;
    if (rollIt) {
      $(".pick_img, .pick_txt").show();
    } else {
      $(".pick_img, .pick_txt").hide();
    }
  });

  var storyHeight2300 = 2300;

  $(".box_store, .box_fran").hide();
  $(window).scroll(function () {
    var rollIt = $(this).scrollTop() >= storyHeight2300;
    if (rollIt) {
      $(".box_store, .box_fran").show();
    } else {
      $(".box_store, .box_fran").hide();
    }
  });
});
