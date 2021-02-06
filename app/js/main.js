'use strict';

(function($){
	$(document).ready(function() {
		// Code
		$('.burger').on('click', function() {
			$(this).toggleClass('burger--open');
			$('.menu__wrapper').toggleClass('menu__wrapper--open');
		});
	});
})(jQuery);
