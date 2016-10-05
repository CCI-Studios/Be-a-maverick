(function($) {
	$(function(){
		
		$('#mobile-menu-icon a').click(function(e){

			e.preventDefault();
			$('#navigation .region-navigation').slideToggle();
		});
	});
	
	


}(jQuery));