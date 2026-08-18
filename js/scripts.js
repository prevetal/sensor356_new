WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function() {
	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			lazy: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
		})
	}


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			spaceBetween: 10,
			breakpoints: {
				0: {
					slidesPerView: 'auto'
				},
				1280: {
					slidesPerView: 4
				},
				1440: {
					slidesPerView: 5
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.product')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.product')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Product info
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			direction: 'vertical',
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 4,
					spaceBetween: 4,
				},
				480: {
					slidesPerView: 5,
					spaceBetween: 10,
				}
			},
		})

		new Swiper('.product_info .big .swiper', {
			direction: 'vertical',
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			thumbs: {
				swiper: productThumbs
			}
		})
	}


	$('.product_data .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).prev('.text_block').toggleClass('show_all')
	})


	// Advantages slider
	const advantagesSliders = [],
		advantages = document.querySelectorAll('.advantages .swiper')

	advantages.forEach((el, i) => {
		el.classList.add('advantages_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.advantages-swiper-button-next',
				prevEl: '.advantages-swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 0,
			breakpoints: {
				0: {
					slidesPerView: 'auto'
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		advantagesSliders.push(new Swiper('.advantages_s' + i, options))
	})


	// Text blocks slider
	const textBlocksSliders = [],
		textBlocksSlider = document.querySelectorAll('.text_blocks_slider .swiper')

	textBlocksSlider.forEach((el, i) => {
		el.classList.add('text_blocks_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			}
		}

		textBlocksSliders.push(new Swiper('.text_blocks_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Add product to compare
	$('.product .compare_btn, .product_info .compare_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Add product to favorite
	$('.product .favorite_btn, .product_info .favorite_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Add product to cart
	$('.product .buy_btn, .product_info .buy_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Changing the amount of products
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Mini pop-up windows
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')
			$('body').removeClass('catalog_open')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
			if (modalId === '#catalog_modal') $('body').addClass('catalog_open')
		}
	})

	// Close the popup when you click outside of it
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')
			$('body').removeClass('catalog_open')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn, .overlay, header .close_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('header').toggleClass('show')

		$('.mob_header .mob_menu_btn').hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(300)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Focus when clicking on the field name
	const formLabels = document.querySelectorAll('form .label')

	if (formLabels) {
		formLabels.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.closest('.line').querySelector('.input, textarea').focus()
			})
		})
	}


	// Select file
	const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => {
				const selected = el.closest('.file').querySelector('label .selected')

				selected.querySelector('span').innerText = el.value

				el.value
					? selected.classList.remove('empty')
					: selected.classList.add('empty')
			})
		})
	}

	$('.file .selected .delete_btn').click(function(e) {
		$(this).closest('.file').find('input').val('')
		$(this).closest('.selected').addClass('empty')
	})


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)'),
		selectsInstances = []

	if (selects) {
		selects.forEach(el => {
			selectsInstances.push(NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			}))

			el.addEventListener('change', () => el.classList.add('selected'))

			if (el.querySelector('option[selected]')) {
				el.classList.add('selected')
			}
		})
	}


	// Filter
	initSticky()

	$('.mob_filter_btn, .filter .mob_head .close_btn').click(function(e) {
		e.preventDefault()

		$('.filter').toggleClass('show')
	})

	$('.filter .mob_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).next('.form').slideToggle(300)
	})

	$('.filter .item .name').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).next('.data').slideToggle(300)
		$('.filter .fixed_submit_btn').hide()
	})

	$('.filter .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).closest('.data').toggleClass('show_all')
		$('.filter .fixed_submit_btn').hide()
	})

	$('.filter .checkbox input').change(function() {
		const field = $(this).closest('.field')

		const offsetTop =
			field.position().top
			+ field.outerHeight() * 0.5

		$('.filter .fixed_submit_btn')
			.css('top', offsetTop)
			.fadeIn(300)
	})

	$('.filter .scroll').on('scroll', function() {
		const btn = $(this).closest('.filter').find('.fixed_submit_btn')

		btn.fadeOut(200)
	})


	const priceRange = $('#price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 30000,
		from: 1000,
		to: 17900,
		step: 100,
		onChange: data => {
			$('.price_range input.from').val(data.from.toLocaleString())
			$('.price_range input.to').val(data.to.toLocaleString())
		},
		onUpdate: data => {
			$('.price_range input.from').val(data.from.toLocaleString())
			$('.price_range input.to').val(data.to.toLocaleString())
		}
	}).data('ionRangeSlider')

	$('.price_range .input').keyup(function () {
		priceRange.update({
			from: parseInt($('.price_range input.from').val().replace(/[^\d]/g, ""), 10),
			to: parseInt($('.price_range input.to').val().replace(/[^\d]/g, ""), 10)
		})
	})


	// Smooth scrolling to anchor
	document.querySelectorAll('.scroll_btn').forEach(btn => {
		btn.addEventListener('click', function(e) {
			e.preventDefault()

			const anchorId = e.currentTarget.dataset.anchor,
				el = document.getElementById(anchorId)

			if (!el) return

			el.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			}, 1000)

			history.replaceState(null, '', '#' + anchorId)

			const container = e.currentTarget.closest('.product_data')

			if (container) {
				container.querySelectorAll('.scroll_btn').forEach(b => b.classList.remove('active'))
			}

			e.currentTarget.classList.add('active')
		})
	})


	// Header catalog
	$('header .catalog_menu .col .catalog_link[data-sub-col]').on('mouseenter', function (e) {
		e.preventDefault()

		const subCol = $(this).data('sub-col')

		if ($(this).closest('.col').hasClass('sub_col')) {
			$('header .catalog_menu .sub_sub_col').removeClass('show').hide()
			$('header .catalog_menu .sub_sub_col_' + subCol).addClass('show').fadeIn(300)
		} else {
			$('header .catalog_menu .sub_sub_col').removeClass('show').hide()
			$('header .catalog_menu .sub_col').removeClass('show').hide()

			$('header .catalog_menu .sub_col_' + subCol).addClass('show').fadeIn(300)
		}
	})

	$('header .catalog_menu .col:not(.sub_col):not(.sub_sub_col) .catalog_link:not([data-sub-col])').mouseenter(function (e) {
		$('header .catalog_menu .sub_col').removeClass('show').hide()
	})


	$('header .catalog_menu .col.sub_col .catalog_link:not([data-sub-col])').mouseenter(function (e) {
		$('header .catalog_menu .sub_sub_col').removeClass('show').hide()
	})

	$('header .catalog_menu .col .back_btn').click(function(e) {
		e.preventDefault()

		const subCol = $(this).closest('.col')

		$(subCol).removeClass('show').hide()
	})


	document.querySelectorAll('textarea').forEach(ta => {
		autoTextareaResize(ta)

		ta.addEventListener('input', () => autoTextareaResize(ta))
	})


	categoryHead = document.querySelector('.category_info .head')

	getStickyTop = () => parseInt(getComputedStyle(categoryHead).getPropertyValue('--sticky-top'))


	// Custom submit
	$('body').on('submit', '.action_form .form, #quike_buy_modal .form, #request_modal .form', function (e) {
		e.preventDefault()

		let form = $(this),
    		isValid = true

		form.find('[required]').each(function() {
			let field = $(this),
				value = field.val()?.trim()

			if (field.attr('type') === 'checkbox') {
				if (!field.is(':checked')) {
					field.closest('label').addClass('error')
					isValid = false
				} else {
					field.closest('label').removeClass('error')
				}
			} else {
				if (!value) {
					field.addClass('error')
					isValid = false
				} else {
					field.removeClass('error')
				}
			}
		})

		if (!isValid) return
	})


	function validateCheckoutForm() {
		let form = $('.checkout_info .form'),
			isValid = true

		// Проверяем required поля формы
		form.find('[required]').each(function () {
			let field = $(this),
				value = field.val()?.trim()

			if (!value) {
				field.addClass('error')
				isValid = false
			} else {
				field.removeClass('error')
			}
		})

		let checkbox = $('.cart_info .agree .checkbox input')

		if (!checkbox.is(':checked')) {
			checkbox.closest('label').addClass('error')
			isValid = false
		} else {
			checkbox.closest('label').removeClass('error')
		}

		return isValid
	}


	$('.checkout_info .form').on('submit', function (e) {
		e.preventDefault()

		if (!validateCheckoutForm()) return
	})

	$('.cart_info .checkout_btn').on('click', function (e) {
		e.preventDefault()

		if (!validateCheckoutForm()) return
	})


	$(document).on('input change', '.action_form [required], .checkout_info [required], .cart_info .agree [required]', function() {
    	let field = $(this)

		field.attr('type') === 'checkbox'
			? field.closest('label').removeClass('error')
			: field.removeClass('error')
	})


	// Brand page
	$('.brand_page .spoler_btn').click(function(e) {
		const parent = $(this).closest('.brand_page')

		$(this).toggleClass('active')
		parent.find('.text_block').toggleClass('show')
	})


	$('.brand_page .categories .main a').click(function(e) {
		e.preventDefault()

		const item = $(this).closest('.item')

		$(this).toggleClass('active')
		item.find('.sub').slideToggle(300)
	})
})



window.addEventListener('load', function () {
	// Fix. header
	if (!$('header').hasClass('no_fixed')) {
		headerInit = true,
		headerHeight = $('header').outerHeight()

		$('header').wrap('<div class="header_wrap"></div>')
		$('.header_wrap').height(headerHeight)

		headerInit && $(window).scrollTop() > headerHeight
			? $('header').addClass('fixed')
			: $('header').removeClass('fixed')
	}
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Filter
		initSticky()


		// Fix. header
		if (!$('header').hasClass('no_fixed')) {
			headerInit = false
			$('.header_wrap').height('auto')

			setTimeout(() => {
				headerInit = true
				headerHeight = $('header').outerHeight()

				$('.header_wrap').height(headerHeight)

				headerInit && $(window).scrollTop() > headerHeight
					? $('header').addClass('fixed')
					: $('header').removeClass('fixed')
			}, 100)
		}


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



window.addEventListener('scroll', function () {
	// Fix. header
	if (!$('header').hasClass('no_fixed')) {
		typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > headerHeight
			? $('header').addClass('fixed')
			: $('header').removeClass('fixed')
	}

	if (!$('.mob_header').hasClass('no_fixed')) {
		$(window).scrollTop() > 0
			? $('.mob_header').addClass('fixed')
			: $('.mob_header').removeClass('fixed')
	}


	// Category head
	if (categoryHead) {
		const top = categoryHead.getBoundingClientRect().top,
			stickyTop = getStickyTop()

		top <= stickyTop
			? categoryHead.classList.add('is_stuck')
			: categoryHead.classList.remove('is_stuck')
	}
})



function autoTextareaResize(el) {
    el.style.height = 'auto'

    const border = el.offsetHeight - el.clientHeight

    el.style.height = (el.scrollHeight + border) + 'px'
}



function initSticky() {
    const $filter = $('.filter')

	let topOffset = 0

    if ($filter.data('hcSticky')) {
        $filter.hcSticky('destroy')
    }

    if (window.innerWidth >= 1280 && window.innerWidth < 1440) {
        topOffset = 86
    }

    if (window.innerWidth >= 1440 && window.innerWidth < 1900) {
        topOffset = 90
    }

	if (window.innerWidth >= 1900) {
        topOffset = 96
    }

	if (window.innerWidth >= 1280) {
		$filter.hcSticky({
			stickTo: $('aside'),
			top: topOffset,
			bottom: 10
		})
	}
}