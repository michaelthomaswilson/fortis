$(document).foundation();

$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    headerHeight = $("#masthead").height();
    bannerHeight = $(".copyBanner").height();
    windowHeight = windowHeight-headerHeight;   
    heroHeight = windowHeight - bannerHeight;

    console.log('window:' + $(window).innerHeight());
    console.log('header:' + headerHeight);
    console.log('banner:' + bannerHeight);
    console.log('hero:' + heroHeight);

    $('.fullscreen').css('height', windowHeight);
    $('.heroPhoto').css('height', heroHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});