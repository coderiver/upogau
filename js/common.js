$(document).ready(function() {

	function popup() {
		$('.overlay, .popup__close').on('click', function() {
			$('body').removeClass('has-popup');
			$('.overlay').removeClass('is-open');
		});
	} popup();

	function tabs() {
		var el = $('.js-tabs'),
				el_navitem = el.find('.tabs__navitem'),
				el_list = el.find('.tabs__content'),
				el_item = el.find('.tabs__pane');


		el_navitem.on('click', function() {
			el.find('.tabs__navitem').removeClass('is-active');
			$(this).addClass('is-active');
			return false;
		});

		$('.tabs__navitem').each(function() {
			var el_tab = $(this).attr("href");
			$(this).on('click', function() {
				$('.tabs__content').find('.tabs__pane').removeClass('is-open');
				$(el_tab).addClass('is-open');
			});
		});

	} tabs();

	$('.js-blogs').each(function(){
		var p = this.parentNode;
		$(this).cycle({
			fx: "carousel",
			autoHeight: "container",
			timeout:  0,
			carouselVisible: 1,
			slideActiveClass: "is-active",
			pagerActiveClass: "is-active",
			disabledClass: "is-disabled",
			slideClass: "blog__slide",
			allowWrap: "true",
			carouselFluid: "true",
			slides: $('.blog__slide', p),
			prev:   $('.blog__prev', p),
			next:   $('.blog__next', p),
		});
	});

	$('.js-caroarticles').each(function(){
		var p = this.parentNode;
		$(this).cycle({
			fx: "carousel",
			autoHeight: "container",
			timeout:  0,
			carouselVisible: 3,
			slideActiveClass: "is-active",
			pagerActiveClass: "is-active",
			disabledClass: "is-disabled",
			slideClass: "caro-articles__slide",
			allowWrap: true,
			carouselFluid: "true",
			slides: $('.caro-articles__slide', p),
			prev:   $('.caro-articles__prev', p),
			next:   $('.caro-articles__next', p),
		});
	});

	$('.js-mainslider').each(function(){
		var p = this.parentNode;
		$(this).cycle({
			fx: "carousel",
			// autoHeight: "container",
			timeout:  0,
			carouselVisible: 1,
			slideActiveClass: "is-active",
			pagerActiveClass: "is-active",
			disabledClass: "is-disabled",
			slideClass: "mainslider__slide",
			allowWrap: true,
			carouselFluid: "true",
			slides: $('.mainslider__slide', p),
			prev:   $('.mainslider__prev', p),
			next:   $('.mainslider__next', p),
			pager: ".mainslider__pager",
			pagerTemplate: "<span>•</span>"
		});
	});

	$('.js-partners').each(function(){
		var p = this.parentNode;
		$(this).cycle({
			fx: "scrollHorz",
			timeout:  0,
			log: false,
			slideActiveClass: "is-active",
			pagerActiveClass: "is-active",
			disabledClass: "is-disabled",
			slideClass: "partners__slide",
			slides: $('.partners__slide', p),
			pager: ".partners__pager",
			pagerTemplate: "<span>•</span>"
		});
	});

	// SLIDESHOW
	var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
		// advance the other slideshow
		slideshows.not(this).cycle('goto', opts.currSlide);
	});
	$('#cycle-2 .cycle-slide').click(function(){
		var index = $('#cycle-2').data('cycle.API').getSlideIndex(this);
		slideshows.cycle('goto', index);
	});

});