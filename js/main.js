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
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
  });
});

$(document).ready(function () {
  $(".testimonial-container").slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 2000,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: false,
    pauseOnFocus: false,
  });
});

//   accordion

$(document).ready(function () {
  var allPanels = $(".accordion > .inner").hide();

  $(".accordion > h2 > a").click(function () {
    $(this).slideDown(500);
    $(this).toggleClass("selected");

    $(this)
      .parent()
      .next()
      .slideToggle(function () {});

    return false;
  });
});
