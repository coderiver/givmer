head.ready(function() {

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$(".js-popup").hide();
	});

	$(document).bind(event, function(e){
		$(".js-overlay").hide();
		$("body").removeClass("has-open-popup");
		$(".js-select-list").hide();
		$(".js-select").removeClass("is-active");
		$(".js-extend-item").removeClass("is-active");
		$(".js-item-popup").fadeOut(200);
		$(".js-window").fadeOut(200);
	});

	$(".js-extend-item-link").on("click", function(event){
		$(this).parents(".js-extend-item").toggleClass("is-active");
		event.stopPropagation();
		return false;
	});

	$('.js-intro-slider').slick({
		slidesToShow: 1,
		infinite: true,
		speed: 300,
		touchMove: true,
		//arrows: true,
		dots: true,
		autoplay: true,
  		autoplaySpeed: 5000,
		onInit: function(){
			//$(".slider-banner").addClass("is-ready");
		}
	});

});