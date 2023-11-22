// nav bar
$(document).ready(function () {
  const $hamburger = $(".hamburger");
  const $navLinks = $(".nav-links");

  $hamburger.click(function () {
    $hamburger.toggleClass("show");
    $navLinks.toggleClass("show");
  });
});
// home banner
$(document).ready(function () {
  $(".hero__slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
  });
});
