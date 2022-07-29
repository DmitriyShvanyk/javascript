;
(function () {

	"use strict";

	/*
	 * -------------------------------------------------------
	 *  navbar
	 * -------------------------------------------------------
	 */
	function setNavbar() {
		var navbar = document.querySelector('.navbar');
		var navbarContent = document.querySelector('.navbar__content');
		var navbarHamburger = document.querySelector('.navbar__hamburger');
		var scrollY;

		window.addEventListener('scroll', function () {
			scrollY = window.scrollY || window.pageYOffset;

			if (scrollY > 80) {
				navbar.classList.add('navbar--active');
			} else {
				navbar.classList.remove('navbar--active');
			}
		});

		navbarHamburger.addEventListener('click', function (e) {
			e.preventDefault();

			this.classList.toggle('navbar__hamburger--open');
			navbarContent.classList.toggle('navbar__content--open');
		});
	}
	setNavbar();


	/*
	 * -------------------------------------------------------
	 *  set active link when scroll
	 * -------------------------------------------------------
	 */
	function setScrollActiveMenu() {

		// Cache selectors
		var lastId,
			topMenu = $(".navbar"),
			topMenuHeight = topMenu.outerHeight() + 0,
			// All list items
			menuItems = topMenu.find(".navbar__menu-link"),
			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function () {
				var item = $($(this).attr("href"));
				if (item.length) {
					return item;
				}
			});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function (e) {
			e.preventDefault();
			var href = $(this).attr("href"),
				offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
			$('html, body').stop().animate({
				scrollTop: offsetTop
			}, 500);

			if ($(".navbar__hamburger").hasClass("navbar__hamburger--open")) {
				$(".navbar__hamburger").removeClass('navbar__hamburger--open');
				$('.navbar__content').removeClass('navbar__content--open');
			}

		});

		// Bind to scroll
		$(window).scroll(function () {
			// Get container scroll position
			var fromTop = $(this).scrollTop() + topMenuHeight;

			// Get id of current scroll item
			var cur = scrollItems.map(function () {
				if ($(this).offset().top < fromTop)
					return this;
			});
			// Get the id of the current element
			cur = cur[cur.length - 1];
			var id = cur && cur.length ? cur[0].id : "";

			if (lastId !== id) {
				lastId = id;
				// Set/remove active class
				menuItems
					.parent().removeClass("navbar__menu-list--active")
					.end().filter("[href='#" + id + "']").parent().addClass("navbar__menu-list--active");
			}
		});

	}
	setScrollActiveMenu();


	/*
	 * -------------------------------------------------------
	 *  show more services
	 * -------------------------------------------------------
	 */
	function showMoreServices() {
		var services = document.querySelector('.services');
		var btnMoreServices = document.querySelector('.js-btn-more-services');

		btnMoreServices.addEventListener('click', function (e) {
			e.preventDefault();

			services.classList.add('services--more');
		});
	}
	showMoreServices();


	/*
	 * -------------------------------------------------------
	 *  carousel hero
	 * -------------------------------------------------------
	 */
	if ($('.carousel-hero').length > 0) {
		$('.carousel-hero').owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			lazyLoad: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	}


	/*
	 * -------------------------------------------------------
	 *  scroll anchor - add class .js-scroll
	 * -------------------------------------------------------
	 */
	$('.js-scroll').click(function (event) {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top + -55
		}, 500);
		event.preventDefault();
	});


})();
