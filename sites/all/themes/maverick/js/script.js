(function($){
	
	$(function()
	{	
		$('.view-featured-mavericks .view-content').slick({
			dots: false,
		  	infinite: true,
		  	speed: 300
		});

		$("#navigation").before($("#navigation").clone().addClass("animateIt"));
	    $(window).on("scroll", function () {

	    	if($(window).scrollTop() > 0)
	    	{
		        $(".navigation.animateIt").fadeIn();
	    	}
	    	else
	    	{
	    		 $(".navigation.animateIt").fadeOut();
	    	}
	    });

	    $('.form-item').unwrap();
	    $('.page-cart #page-title').text('Get Yours');
	    $('#commerce-checkout-form-checkout .messages.error').append("<div>Please fill the required fields</div>")
		$('#edit-continue').attr('value','Continue');
		$('#edit-account').insertBefore('#edit-customer-profile-billing .fieldset-wrapper');
		$('<p class="instruction">All fields marked with an asterisk (*) are required</p>').insertAfter('#edit-customer-profile-billing .messages.error');
		$('.form-item-commerce-payment-payment-details-credit-card-owner > label').text('Name On Card');
		$('.form-item-commerce-payment-payment-details-credit-card-code > label').text('CVC Number')

		if(document.location.href.indexOf('submitted') > -1 )
	      {
	        $('#mailchimp').fadeIn();
	      }

		$('.navigation .region-navigation a[href*=#]').on('click',function (e) 
	    {   
	        var target = this.hash;
	        var $target = $(target);
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top-100
	        }, 400);
	    });


	    $('.views-field-title h2,#page-title,h1').each(function() {
           var word = $(this).html();
           var index = word.lastIndexOf(' ');
           var wl = word.split(' ');
           var len = word.length;
           if(index == -1) {
              index = word.length;
           }

           if(wl.length > 1)
           {
             $(this).html('<span class="first-word">' + word.substring(0, index) + '</span>' + word.substring(index, word.length));
           }

           if(wl.length == 1)
           {
             $(this).html('<span class="single-word">' + word.substring(0, index) + '</span>');
           }
        });

        var path = window.location.pathname;
        var path_arr = path.split('/');
        var menu = '.block-menu-menu-shopping-menu';
       	if((path_arr[1] == 'cart' || path_arr[1] == 'checkout') && !path_arr[2])
       	{
       		$(menu+' li.active-trail').text('Step:1');
       		$(menu+' .step2').text('Step:2');
       		$(menu+' .step3').text('Step:3');
       		$(menu+' .step4').text('Step:4');
       	}
   		if(path_arr[1] == 'checkout' && $.isNumeric(path_arr[2]) && !path_arr[3])
       	{
       		$(menu+' .step2').addClass('active').text('Step:2');
       		$(menu+' .step3').text('Step:3');
       		$(menu+' .step4').text('Step:4');
       	}
       	if(path_arr[1] == 'checkout' && $.isNumeric(path_arr[2]) && path_arr[3] == 'review')
       	{
       		$(menu+' .step3').addClass('active').text('Step:3');
       		$(menu+' .step4').text('Step:4');
       	}
       	if(path_arr[1] == 'checkout' && $.isNumeric(path_arr[2]) && path_arr[3] == 'complete')
       	{
       		$(menu+' .step1').text('Step:1');
       		$(menu+' .step2').text('Step:2');
       		$(menu+' .step3').text('Step:3');
       		$(menu+' .step4').addClass('active').text('Step:4');
       	}

		
	});

}(jQuery));