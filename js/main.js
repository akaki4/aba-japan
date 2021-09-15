$(function () {
  // // スライダーの処理
  // $('.slider').slick({
  //   autoplay: true,
  //   autoplaySpeed:5000,
  //   dots:true,
  //   centerMode: true,
  //   centerPadding: '10%',
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1080,
  //       settings: {
  //         centerMode: false,
  //         centerPadding: '0%',
  //       }
  //     },
  //   ]
  // });
  // ハンバーガーメニューの処理
  $("#js-hamburgerBtn").on("click", function () {
    $("#js-hamburgerBtnMenu").toggleClass("close");
    $("#js-spMenu").toggleClass("open");
  });
  $(".hamburgerSection").on("click", function () {
    $("#js-spMenu").toggleClass("close");
    $("#js-spMenu").toggleClass("open");
  });
});
