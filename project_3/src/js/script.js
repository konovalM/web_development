/* const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    mouseDrag: true
});

document.querySelector('.slick_prev').addEventListener('click', function() {
    slider.goTo('prev');
});


document.querySelector('.slick_next').addEventListener('click', function() {
    slider.goTo('next');
}); */

const mySiema = new Siema({
    selector: '.carousel__inner',
    loop: true
});

document.querySelector('.slick_prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.slick_next').addEventListener('click', () => mySiema.next());


(function($) {
    $(function() {
      
		$('ul.catalog__tabs').on('click', 'li:not(.active)', function() {
			$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		});
      
      /* $('.catalog-item__link').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })

      
      $('.catalog-item__back').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      }) */



		function toggleSlide(item){
			$(item).each(function(i){
				$(this).on('click', function(e){
					e.preventDefault();
					$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
					$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
				})
			})
		}


		toggleSlide('.catalog-item__link');
		toggleSlide('.catalog-item__back');



      
      
      // Modal

		$('[data-modal=consultation]').on('click', function(){
			$('.overlay, #consultation').fadeIn();
		});
		$('.button_mini').on('click', function(){
			
			$('.overlay, #order').fadeIn();
		});

		$('.button_mini').each(function(i){
			$(this).on('click', function(){
				$('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
			})
		})

		$('.modal__close').on('click', function(){
			$('.overlay, #order, #consultation, #thanks').fadeOut();
		});
		$('.button_modal').on('click', function(){
			$('#order, #consultation').fadeOut();
			$('#thanks').fadeIn();
		});
    });
    })(jQuery);
    

