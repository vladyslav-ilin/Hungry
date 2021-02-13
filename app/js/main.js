'use strict';


(function($){
	$(document).ready(function() {
		// Code
		$('.burger').on('click', function() {
			$(this).toggleClass('burger--open');
			$('.menu__wrapper').toggleClass('menu__wrapper--open');
		});
	});

   $('.tabs__btn').on('click', function() {
      $('.tabs__all').toggleClass('tabs__all--active');
   })

   $('.tabs__list').click(function (operation) {
      operation.preventDefault();
      $('.tabs__list').removeClass('tabs__list--active');
      $('.tabs__wrapper--active').removeClass('tabs__wrapper--active');

      $(this).addClass('tabs__list--active');
      let item = $(this).find('a').attr('href');
      $(item).addClass('tabs__wrapper--active');
   })
})(jQuery);

new Swiper('.swiper__container', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade: true
	// }
});
