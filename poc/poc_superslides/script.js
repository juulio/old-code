$( document ).ready(function() {
	
	/*var slidesHeight = $('.slides').height() - 150;
	$('.slides').height(slidesHeight);*/

	$('#slides').superslides({
		scrollable: false,
		animation: 'slide',
		play: 6000,
		pagination: false,
		nav:'.slides-navigation'
	});

});