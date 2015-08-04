$(document).foundation();

var is_mobile = false;
var headerHeight;

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

/*
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
 */

  	$('a.scroll').click(function() {//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
  		var href = $(this).attr('href');
		$.scrollTo(href, 500,{ offset:-headerHeight, easing:'easeOutCubic' });
		//return false;
	});
});