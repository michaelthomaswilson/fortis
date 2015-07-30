$(document).foundation();

$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    headerHeight = $("#masthead").height();
    bannerHeight = $(".copyBanner").height();
    windowHeight = windowHeight-headerHeight;
    //heroHeight = windowHeight - bannerHeight;
    $('.fullscreen').css('height', windowHeight);
    //$('.heroPhoto').css('height', heroHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});