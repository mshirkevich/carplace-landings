$(document).ready(function () {
	$(".scroll").click(function (e) {
		e.preventDefault();
		$("html, body").animate(
			{
				scrollTop: $($(this).attr("href")).offset().top + "px",
			},
			{
				duration: 500,
				easing: "swing",
			}
		);
		return false;
	});

	$(function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 1000,
			values: [100, 750],
			slide: function (event, ui) {
				$(".ui-slider-handle .value-min").html(ui.values[0]);
				$(".ui-slider-handle .value-max").html(ui.values[1]);
			},
		});
		$(".p-form__slider .ui-slider-handle:first-of-type").append(
			'<span class="value value-min">' +
				$("#slider-range").slider("values", 0) +
				"</span>"
		);
		$(".p-form__slider .ui-slider-handle:last-of-type").append(
			'<span class="value value-max">' +
				$("#slider-range").slider("values", 1) +
				"</span>"
		);
	});

	$(".el-faq__title").on("click", function () {
		if ($(this).parent().hasClass("el-faq--is-active")) {
			$(this).parent().removeClass("el-faq--is-active");
			$(this).siblings(".el-faq__answer").slideUp("slow");
		} else {
			$(".el-faq").removeClass("el-faq--is-active");
			$(".el-faq__answer").slideUp("slow");
			$(this).parent().addClass("el-faq--is-active");
			$(this).siblings(".el-faq__answer").slideDown("slow");
		}
	});

	$(".popup").magnificPopup({
		type: "inline",
		preloader: false,
		removalDelay: 160,
		closeOnBgClick: true,
		enableEscapeKey: true,
		fixedContentPos: true,
		showCloseBtn: false,
	});
	$(document).on("click", ".popup-close", function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	const ps = new PerfectScrollbar(".list-offers");

	if ($("body").width() < 731) {
		$(".search-banner__link.showmap").on("click", function (e) {
			e.preventDefault();
			$(".search-banner__map").show();
		});
	}

	$(".header__menuopen").on("click", function () {
		$(this).toggleClass("is-active");
		$(".header__bottom").slideToggle();
	});
});
$(document).mouseup(function (e) {});
