$(document).ready(function($) {
	console.log('hey');
	console.log($('.imageleft'));

	$('.portfolio-container').masonry({
  	// options
  	itemSelector: '.discipline-type',
  	columnWidth: 500
  	console.log($('.discipline-type'));
	});

});
