(function($) {
	$(function(){
		$.ajax({
			"type":"GET",
			"url":"https://api.instagram.com/v1/users/self/media/recent?count=5&access_token=3152797019.1677ed0.9b393771eecd4944bd897be69db77dda",
			"success":success,
			"dataType":"jsonp"
		});
	});
	function success(json)
	{
		if (json && json.data)
		{
			for (var i=0; i<6; i++)
			{
				if (json.data[i] && json.data[i].images && json.data[i].images.low_resolution && json.data[i].images.low_resolution.url)
				{
					var url = json.data[i].images.low_resolution.url;
					$("#instagram-pics").append("<div class=\"views-row\"><a href=\"http://instagram.com/be.a.maverick\" target=\"_blank\" ><img src='"+url+"' style=\"width:182px;height:182px;margin:0 5px\"/></a></div>");
				}
			}               
		}
	}


}(jQuery));