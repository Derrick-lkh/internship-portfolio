$(document).ready(function() {
  $(".parallax").hover(
    function() {
      $(this)
        .find(".view-btn")
        .css({ display: "flex" });
    },
    function() {
      $(this)
        .find(".view-btn")
        .css({ display: "none" });
    }
  );
  if ($(window).width() < 768) {
    $(".card-content-right")
      .addClass("card-content-left change-back")
      .removeClass("card-content-right");
  }
});

$(window).resize(function() {
  if ($(window).width() < 768) {
    $(".card-content-right")
      .addClass("card-content-left change-back")
      .removeClass("card-content-right");
  } else {
    $(".change-back")
      .addClass("card-content-right")
      .removeClass("card-content-left change-back");
  }
});
