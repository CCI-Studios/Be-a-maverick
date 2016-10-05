(function($)
{
	$(function()
	{
		$(".mailchimp-signup-subscribe-form .form-submit").click(validation_email);
	

		function validation_email()
		{
			var email = $(".mailchimp-signup-subscribe-form #edit-mergevars-email").val();
	  
			var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			var valid = emailReg.test(email);
		

		if(!valid)
		 {	
		 	 $('.mailchimp-signup-subscribe-form #edit-mergevars-email').focus();
		 	 var div="<div id=\"error\"><p>Please fill email field correctly</p></div>"
			 $('#error').remove();
			 $('.block-mailchimp-signup').append(div);
			 return false;
		 }
		 else
		 {
		 	console.log('true');
			return true;
		 }
	
		}
	});

})(jQuery);

