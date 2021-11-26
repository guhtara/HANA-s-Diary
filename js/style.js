/* effect-fade 
---------------------------------------------------------------*/
window.onload = function () {
  scroll_effect();
  $(window).scroll(function () {
    scroll_effect();
  });
  function scroll_effect() {
    $(".effect-fade").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });
  }
};

/* nav-menu-sp (max-width: 767px) 
---------------------------------------------------------------*/
$(function () {
  var $nav = $("#navArea");
  var $btn = $(".toggle_btn");
  var $mask = $("#mask");
  var open = "open"; // class
  // menu open close
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on("click", function () {
    $nav.removeClass(open);
  });
});

/* home-slider 
---------------------------------------------------------------*/
$(function () {
  $(".slider__inner").each(function () {
    var sliderWidth = $(this).width();
    $(this).clone(true).insertBefore(this);
    $(this).clone(true).insertAfter(this);
    $("#slider").css("width", sliderWidth * 3); // 親要素の横幅を子要素の３倍にする
  });
});
/* pagination
--------------------------------------------------------------*/
$(function () {
  $(".news-container").paginathing({
    //親要素のclassを記述
    perPage: 5, //1ページあたりの表示件数
    prevText: "前へ", //1つ前のページへ移動するボタンのテキスト
    nextText: "次へ", //1つ次のページへ移動するボタンのテキスト
    activeClass: "navi-active", //現在のページ番号に任意のclassを付与できます
  });
});

/* modal
-------------------------------------------------------------- */
// $(function () {
//   $("#plus-btn").click(function () {
//     $("#modalArea").fadeIn();
//   });
//   $("#closeModal , #modalBg").click(function () {
//     $("#modalArea").fadeOut();
//   });
// });

/* page_top 
---------------------------------------------------------------*/
$(function () {
  var pagetop = $("#page_top");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});
