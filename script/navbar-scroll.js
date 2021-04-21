$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fidex-top");
    $nav.ToggleClass("scrolled", $(this).scrollTop() > height());
  });
});
