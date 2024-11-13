// tap menu script
$(function () {
  $(".a").on("click", function () {
      $(".b").slideToggle();
  })
});
$(window).resize(function () {
  if (window.innerWidth >= 1260) {
      $(".b").show();
  }
});
$(window).resize(function () {
  if (window.innerWidth <= 1259) {
      $(".b").hide();
  }
});

