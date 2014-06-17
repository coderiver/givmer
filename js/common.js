head.ready(function() {

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";



	$(document).bind(event, function(e){
		$(".js-overlay").hide();
		$("html").removeClass("has-open-popup");
		//$(".js-select-list").hide();
		//$(".js-select").removeClass("is-active");
		$(".js-drop").removeClass("is-active");
		$(".js-drop-link").removeClass("is-active");
		//$(".js-item-popup").fadeOut(200);
		$(".js-window").fadeOut(200);
	});

	$(".js-drop-link").on("click", function(event){
		$(this).parents(".js-drop").toggleClass("is-active");
		$(this).toggleClass("is-active");
		event.stopPropagation();
		return false;
	});

	$('.js-slider').slick({
		slidesToShow: 1,
		infinite: true,
		speed: 300,
		touchMove: true,
		//arrows: true,
		dots: true,
		autoplay: true,
  		autoplaySpeed: 5000,
		onInit: function(){
			//alert();
			//$(".js-slider").addClass("is-ready");
		}
	});

	// popups
	$(".js-popup-link").on("click", function(event){
		$(".js-overlay").fadeOut(200);
		var popup = $(this).attr("href");
		$("html").addClass("has-open-popup");
		$("."+popup).parent().fadeIn(200);
		$("."+popup).find('.js-slider-popup').slick({
			slidesToShow: 1,
			infinite: true,
			speed: 300,
			touchMove: true,
			dots: true,
			autoplay: true,
	  		autoplaySpeed: 5000,
		});
		event.stopPropagation();
		return false; 
	});

	$(".js-popup-close").on("click", function(){
		$(".js-overlay").fadeOut(200); 
		$("html").removeClass("has-open-popup")
		return false;
	});
	$(".js-popup").on("click", function(event){
		event.stopPropagation();
	});
	$(".js-window-link").on("click", function(event){
		//$(".js-overlay").fadeOut(200);
		var left = $(this).offset().left + $(this).outerWidth();
		var top = $(this).offset().top;
		var popup = $(this).attr("href");
		//$("html").addClass("has-open-popup");
		$("."+popup).css({
			top: top,
			left: left
		});
		$("."+popup).fadeIn(200);
		event.stopPropagation();
		return false; 
	});

	$(".js-window-close").on("click", function(){
		$(this).parents(".js-window").fadeOut(200); 
		return false;
	});
	$(".js-window").on("click", function(event){
		event.stopPropagation();
	});

	//rating
	if ($('.js-rating').length > 0) {
		$('.js-rating').each(function(){
			$(this).raty({
				width: 150,
				hints: ['Отвратительно', 'Плохо', 'Неплохо', 'Очень хорошо', 'Отлично'],
				starOff: 'img/star.png',
				starOn : 'img/star-act.png',
				score: function() {
					return $(this).attr('data-score');
				}
			});
		});
			
	}
	if ($('.js-rating-small').length > 0) {
		$('.js-rating-small').each(function(){
			$(this).raty({
				width: 62,
				hints: ['Отвратительно', 'Плохо', 'Неплохо', 'Очень хорошо', 'Отлично'],
				starOff: 'img/star-s.png',
				starOn : 'img/star-s-act.png',
				score: function() {
					return $(this).attr('data-score');
				}
			});
		});
			
	}

	if ($('.js-rating-read').length > 0) {
		$('.js-rating-read').each(function(){
			$(this).raty({
				width: 150,
				readOnly: true,
				hints: ['Отвратительно', 'Плохо', 'Неплохо', 'Очень хорошо', 'Отлично'],
				starOff: 'img/star.png',
				starOn : 'img/star-act.png',
				score: function() {
					return $(this).attr('data-score');
				}
			});
		});
	}
	if ($('.js-rating-small-read').length > 0) {
		$('.js-rating-small-read').each(function(){
			$(this).raty({
				width: 62,
				readOnly: true,
				hints: ['Отвратительно', 'Плохо', 'Неплохо', 'Очень хорошо', 'Отлично'],
				starOff: 'img/star-s.png',
				starOn : 'img/star-s-act.png',
				score: function() {
					return $(this).attr('data-score');
				}
			});
		});
	}

	$(".js-download-btn").on("click",function(){
		$(this).parents(".js-download").find(".js-download-input").trigger("click")
	});

	if ($(".js-input-tel").length) {
        $(".js-input-tel").mask("+999 99 99 99 99");
    }

    $(".textarea textarea").focusin(function() {
	  $(this).parent().addClass("is-focused")
	});
	$(".textarea textarea").focusout(function() {
	  $(this).parent().removeClass("is-focused")
	});

	$(".js-select-multi").multiselect({
		selectedList: 7,
		noneSelectedText: $(this).attr("data-placeholder"),
		header: "",
 		open: function () {
 			//$(this).multiselect("widget").addClass("is-focused");
 		},
 		close: function () {
 			//$(this).multiselect("widget").find("input[type='search']:first").val("");
 			//$(this).multiselect("widget").find(".ui-multiselect-checkboxes li").removeAttr("style");
 		}
	}).on("multiselectclick", function(event, ui) {
		if ($(this).multiselect("widget").find("input").is(":checked")) {
			$(this).next().addClass("has-value").removeClass("has-placeholder");
		}
		else {
			$(this).next().addClass("has-placeholder").removeClass("has-value");
		}

	});
	$(".js-select-width").multiselect({
		selectedList: 7,
		noneSelectedText: $(this).attr("data-placeholder"),
		header: "",
 		open: function () {
 			$(this).multiselect("widget").addClass("is-full-width");
 		},
 		close: function () {
 			$(this).multiselect("widget").removeClass("is-full-width");
 		}
	}).on("multiselectclick", function(event, ui) {
		if ($(this).multiselect("widget").find("input").is(":checked")) {
			$(this).next().addClass("has-value").removeClass("has-placeholder");
		}
		else {
			$(this).next().addClass("has-placeholder").removeClass("has-value");
		}

	});
	$(".js-select-age").multiselect({
		selectedList: 1,
		noneSelectedText: $(this).attr("data-placeholder"),
		header: "",
		multiple: false,
 		open: function () {
 			$(this).multiselect("widget").addClass("is-small");
 		},
 		close: function () {
 			$(this).multiselect("widget").removeClass("is-small");
 		}
	}).on("multiselectclick", function(event, ui) {
		if ($(this).multiselect("widget").find("input").is(":checked")) {
			$(this).next().addClass("has-value").removeClass("has-placeholder");
		}
		else {
			$(this).next().addClass("has-placeholder").removeClass("has-value");
		}

	});
	$(".js-select-single").multiselect({
		selectedList: 1,
		noneSelectedText: $(this).attr("data-placeholder"),
		header: "",
		multiple: false,
 		open: function () {
 			if ($(this).hasClass("has-not-checkbox")) {
 				$(this).multiselect("widget").addClass("has-not-checkbox");
 			}
 			
 		},
 		close: function () {
 			//$(this).multiselect("widget").removeClass("is-small");
 		}
	}).on("multiselectclick", function(event, ui) {
		if ($(this).multiselect("widget").find("input").is(":checked")) {
			$(this).next().addClass("has-value").removeClass("has-placeholder");
		}
		else {
			$(this).next().addClass("has-placeholder").removeClass("has-value");
		}

	});
	$(".js-textarea").keyup(function () {  
		var counter = $(this).parent().find('.js-char-counter');
		var max = +counter.attr("data-max");
		var len = $(this).val().length;
		var char = max - len;
		if (len >= max) {
		    counter.addClass("is-limit").text(char);
		} else {
		    counter.removeClass("is-limit").text(char);
		}
	});

  	// $('.js-fotorama').fotorama({
  	// 	dots: true
  	// });
  	var $fotoramaDiv = $('.js-fotorama').on('fotorama:ready', function () {
	    //alert();
	    $('.js-fotorama').addClass("is-ready");
	}).fotorama();
  	var fotorama = $fotoramaDiv.data('fotorama');
  	$(".js-next-slide").on("click",function(){
		fotorama.show(">");
		return false;
	});

	$(".js-radio input").on("change",function(){
		if ($(this).parent().attr("data-radio") == 1) {
			$(this).parents(".js-radio-group").addClass("is-active");
		}
		if ($(this).parent().attr("data-radio") == 0) {
			$(this).parents(".js-radio-group").removeClass("is-active");
		} 
	}); 
	$(".js-check input").on("change",function(){
		var checkGroup = $(this).parents(".js-check-group");
		var checkHidden = checkGroup.find(".js-check-hidden");
		if ($(this).is(":checked")) {
			checkHidden.removeAttr("hidden");
			$(this).parent().addClass("is-checked");
		}
		else {
			checkHidden.attr("hidden","");
			$(this).parent().removeClass("is-checked");
		}
	}); 

	$(".js-remove-btn").on("click",function(){
		$(this).parents(".js-removeable").remove();
		return false;
	});

	$(".js-nav a").on("click",function(){
		var section = $(this).attr("href");
		if (section.length) {
			var top = $('[data-index="'+section+'"]').offset().top-$(".header").outerHeight();
		}
		$('html, body').animate({
            scrollTop: top
        }, 500);
        return false;
	});
	function scroller() {
    	var section = $(".js-screen");
    	var doc_top = $(document).scrollTop();
    	section.each(function(){
    		var attr = $(this).attr("data-index");
    		var link = $('[href="'+attr+'"]');
    		var link_top = $(this).offset().top-$(".header").outerHeight();
	    	if (doc_top >= link_top) {
	    		$(".js-nav a").removeClass("is-active");
	    		link.addClass("is-active");
	    	}
    	});
    }
    scroller();
    

    function ui_slider_range() {
		$(".js-ui-slider-range").each(function(){
			var slider = $(this).find(".js-ui-slider-main");
			var slider_min = $(this).find(".ui-slider-handle");
			var input_from = $(this).find(".js-ui-slider-from");
			var input_to = $(this).find(".js-ui-slider-to");
			var min_val = +$(this).attr("data-min");
			var max_val = +$(this).attr("data-max");
			slider_min.addClass("js-slider-min");
			slider.slider({
				range: true,
				min: min_val,
				max: max_val,
				step: 50,	
				values: [ min_val, max_val ],
				slide: function( event, ui ) {
					$(this).find(".ui-slider-handle").html("<span></span>");
					$(this).find(".ui-slider-range").next().addClass("slider__min")
					$(this).find(".ui-slider-range").next().next().addClass("slider__max");
					input_from.text(ui.values[0]);
					input_to.text(ui.values[1]);
					//handle_0.text(ui.values[0]);
					//handle_1.text(ui.values[1]);
				}
			});
			//console.log(handle_0);
			//console.log(handle_1);
			$(this).find(".ui-slider-handle").html("<span></span>");
			$(this).find(".ui-slider-range").next().addClass("ui-slider__min")
			$(this).find(".ui-slider-range").next().next().addClass("ui-slider__max");
			//handle_0.text(slider.slider( "values", 0 ));
			//handle_1.text(slider.slider( "values", 1 ));
			input_from.text(slider.slider( "values", 0 ));
			input_to.text(slider.slider( "values", 1 ));
		});
	}
	ui_slider_range();

	$(".js-btn-favorite").on("click",function(){
		$(this).toggleClass("is-active");
		return false;
	});

	$(".js-scroll").scroll(function(){
    	var top = $(this).scrollTop();
		if (top > 0) {
			$(this).parents(".js-result").addClass("has-fixed-filter has-not-filters");
		}
		else {
			$(this).parents(".js-result").removeClass("has-fixed-filter has-not-filters");
		}
    }); 
    $("body").on("click",".js-show-filter",function(){
		$(this).parents(".js-result").removeClass("has-not-filters");
		return false;
	});
	$(window).scroll(function(){
    	scroller();
    }); 


	
});