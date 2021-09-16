$(function () {
  // ハンバーガーメニューの処理
  $("#js-hamburgerBtn").on("click", function () {
    $("#js-hamburgerBtnMenu").toggleClass("close");
    $("#js-spMenu").toggleClass("open");
  });
  
  // ハンバーガーメニュー表示時、下部の空白部分をクリックした際の処理
  $(".hamburgerSpaces").on("click", function () {
    $("#js-spMenu").toggleClass("close");
    $("#js-spMenu").toggleClass("open");
    $("#js-hamburgerBtnMenu").toggleClass("close");
  });

  // スライダーの処理
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          centerPadding: "0%",
        },
      },
    ],
  });
});
