$(document).ready(function() {
	$("#notifications-box").customScrollbar({ skin: "default-skin", hScroll: false, updateOnWindowResize: true, preventDefaultScroll: true });
	
	$('i.menu-trigger').click(function() {
		if (!$('.sidebar-container').is(":visible")) {
			$('.sidebar-container').stop().show('fast',function(){
				$(".sidebar-container").customScrollbar({ skin: "default-skin", hScroll: false, updateOnWindowResize: true, preventDefaultScroll: true });
			});
			$('.inner-block').addClass('with-menu');
			$('#ct-header-bottom').removeClass('no-menu');
			$('footer').addClass('with-menu');
			u = '?m=';
			$("#wrapper").removeClass("g5");
		} else {
			$("#wrapper").addClass("g5");
			$('.sidebar-container').stop().hide('fast');
			$('.inner-block').removeClass('with-menu');
			$('#ct-header-bottom').addClass('no-menu');
			$('footer').removeClass('with-menu');
			u = '?n=';
			
		}
			if (typeof SizeSetFunctions == 'function') {
				SizeSetFunctions();
			} else if (typeof dinamicSizeSetFunction_view == 'function') {
				setTimeout(function () { dinamicSizeSetFunction_view(); }, 1);
			}
			$('.owl-carousel').each( function() {
				var $carousel = $(this);
				var owl = $carousel.data('owlCarousel');
				owl.onResize();
			});

		$('#menu-trigger-response').load(current_url + "home" + u);
	});
});
