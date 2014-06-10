head.ready(function() {

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";



	$(document).bind(event, function(e){
		$(".js-overlay").hide();
		$("html").removeClass("has-open-popup");
		//$(".js-select-list").hide();
		//$(".js-select").removeClass("is-active");
		//$(".js-extend-item").removeClass("is-active");
		//$(".js-item-popup").fadeOut(200);
		//$(".js-window").fadeOut(200);
	});

	$(".js-extend-item-link").on("click", function(event){
		$(this).parents(".js-extend-item").toggleClass("is-active");
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

});