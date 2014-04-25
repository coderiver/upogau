$(document).ready(function() {

	console.log('im ok');

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

});