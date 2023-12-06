$(document).ready(function () {
  // header_menu_list
  $(".header_menu_list").click(function () {
    $(this).siblings().find(".list").slideUp();
    $(this).find(".list").slideToggle();
  });

  // coupon 받기
  $(document).on("keydown", pushEsc);
  function pushEsc(e) {
    if (e.which == "27") {
      // esc keycode = 27
      $(".coupon").fadeOut(800);
    }
  }

  $(".coupon_btn").click(function () {
    $(".coupon").fadeIn(800);
  });

  $("#ok_btn").click(function () {
    $(".coupon").fadeOut(800);
  });

  // m_navbar 햄버거 메뉴
  let navbar = $(".m_navbar");
  navbar.hide();

  $(".header_m_menu").click(function () {
    navbar.slideToggle();
  });

  $(".dropDown_title").click(function () {
    $(this).siblings().find(".dropDown_list").slideUp();
    $(this).find(".dropDown_list").slideToggle();
  });

  // swiper_01
  const slide01 = new Swiper(".swiper-container_01", {
    loop: true,
    pagination: {
      el: ".section_1 .pager",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
    speed: 1000,
  });

  // swiper_02
  const slide02 = new Swiper(".swiper-container_02", {
    loop: true,
    navigation: {
      nextEl: ".section_2 .btnR",
      prevEl: ".section_2 .btnL",
    },
    scrollbar: {
      el: ".section_2 .scrollBar",
    },
    spaceBetween: 20,
    autoplay: {
      delay: 1000,
    },
    speed: 1000,
    breakpoints: {
      1410: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      765: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      0: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
    },
  });

  // top_btn
  let topBtn = $("#top_btn");
  topBtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  topBtn.on("click", function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  // top_btn footer에서 색상 변경
  $(window).scroll(function () {
    let scrollPosition = $(window).scrollTop();
    let footerPosition = $(".footer_menu").offset().top - $(window).height();

    if (scrollPosition > footerPosition) {
      topBtn.addClass("active");
    } else {
      topBtn.removeClass("active");
    }
  });
});
