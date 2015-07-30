$(document).foundation();

var is_mobile = false;

$(document).ready(function() {

  function setHeight() {
    windowHeight = $(window).innerHeight();
    headerHeight = $("#masthead").height();
    bannerHeight = $(".copyBanner").height();
    windowHeight = windowHeight-headerHeight;   
    heroHeight = windowHeight - bannerHeight;

    //console.log('window:' + $(window).innerHeight());
    //console.log('header:' + headerHeight);
    //console.log('banner:' + bannerHeight);
    //console.log('hero:' + heroHeight);

   	if( $('#mobile').css('display')=='none') {
        is_mobile = true;       
    } else {
    	is_mobile = false;
    }

    if (is_mobile != true) {
    	console.log('Desktop');
	    $('.fullscreen').css('height', windowHeight);
	    $('.heroPhoto').css('height', heroHeight);
	} else {
		console.log('Mobile');
		$('.fullscreen').css('height', '');
	    $('.heroPhoto').css('height', '');
		$('.fullscreen').removeAttr('style');
	    $('.heroPhoto').removeAttr('style');
	}
  };

  setHeight();

    // now i can use is_mobile to run javascript conditionally

    if (is_mobile == true) {
        //alert('this is mobile');
    }
  
  $(window).resize(function() {
    setHeight();
  });
});