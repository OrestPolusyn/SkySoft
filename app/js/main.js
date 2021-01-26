$(function () {
  $(".slider__list").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    lazyLoad: "progressive",
    infinite: true,
    arrows: false,
    dots: true,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
  });

  $(".article-box__link").on("click", function () {
    $(".article-box__link, .article-box__content").removeClass("active");

    $(this).siblings(".article-box__content").addClass("active");
    $(this).addClass("active");
  });
});
