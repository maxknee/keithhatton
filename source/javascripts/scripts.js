console.log('hey');
$(document).ready(function($) {
	console.log('hey');

    console.log($('.imageleft'));

    while (!($('.image-left').hasClass('visible'))){
        console.log('hey + 1');
        $('.image-left').addClass('visible');
    };
});


while(screen.width > '640') {

}