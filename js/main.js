$(document).ready(function(){

		//Прокрутка
	$('.menu__item > a').click( function(){ 
        var scrollEl = $(this).attr('href'); 
        if ($(scrollEl).length != 0) { 
            $('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 500);
        }
        return false; 
    });

	// Анимация при появлении
	$(window).scroll(function() {
		$(".feature").each(function() {
			var elPosition = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (elPosition < topOfWindow + 650) {
				$(this).addClass("fadeInLeft");
			}
		});
	});


		//Карусель для отзывов 
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    responsive:{
        0:{
            items:1
        },
        650:{
            items:2
        },
        1000:{
            items:3
        }
    }
	})


});