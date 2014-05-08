$(document).ready(function () {
	setupJCarousel('.bloom-carousel');
	setupJCarousel('.decibel-carousel');
});

function setupJCarousel(selector) {
	$(selector).jcarousel({
        animation: {
        	duration: 200,
        	easing:   'linear',
        	complete: function() {
        	}
    	},
    	wrap: 'both'
    });

    $(selector + '-prev').click(function() {
	    $(selector).jcarousel('scroll', '-=1');
	});

	$(selector + '-next').click(function() {
	    $(selector).jcarousel('scroll', '+=1');
	});
}