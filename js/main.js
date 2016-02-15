function main() {

	(function() {
		'use strict';

		/* ==============================================
  	Testimonial Slider
  	=============================================== */

		$('a.page-scroll').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 40
					}, 900);
					return false;
				}
			}
		});

		/*====================================
		Preloader
		======================================*/

		$(window).load(function() {
				var spans = $('.section-title span');

				for (var ss in spans) {
					if (spans.hasOwnProperty(ss)) {
						var tekst = spans[ss].innerHTML;
						if(tekst){
						tekst = tekst.replace(/(\s)([\S])[\s]+/g,"$1$2&nbsp;");

						spans[ss].innerHTML = tekst;
						}
					}
				}



				// will first fade out the loading animation
				$("#status").fadeOut("slow");

				// will fade out the whole DIV that covers the website.
				$("#preloader").delay(500).fadeOut("slow").remove();

				//Hyphenator.config({
		         // defaultlanguage: 'pl'
		      //});
		      //Hyphenator.run();

			})
			/*====================================
			Show Menu on Book
			======================================*/
		$(window).bind('scroll', function() {
			var navHeight = $(window).height() - 100;
			if ($(window).scrollTop() > navHeight) {
				$('.navbar-default').addClass('on');
			} else {
				$('.navbar-default').removeClass('on');
			}
		});

		$('body').scrollspy({
			target: '.navbar-default',
			offset: 80
		})

		$(document).ready(function() {
			$("a[rel^='prettyPhoto']").prettyPhoto({social_tools:'',show_title:false});

		});

		/*====================================
    Portfolio Isotope Filter
    ======================================*/
		/*$(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
*/
		/*====================================
    WOW JS
    ======================================*/

		new WOW().init();
		//smoothScroll
//SmoothScroll.init();
	}());


}
main();
