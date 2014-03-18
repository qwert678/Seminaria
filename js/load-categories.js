$(document).ready(function(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});
	var output = $('#categories');
	$.ajax({
		url: 'http://www.just-online.biz/sites/seminaria/phone/categories.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
		var topCategories = '<div class="bread-crumb"></div>'
							+ '<div class="bread-crumb"></div>';
			$.each(data, function(i,item){ 
				var categories = '<div style="width:100%;" class="android-detected">'
				+ '<a style="padding-right:20px; width:100%;" href="'+item.catlink+'" class="mobile-detector-button"><img src="'+item.CatImage+'" width="100" height="100" align="left" ><p style="font-size:15px; font-weight:bold; margin-top:10%; " align="center">'+item.CatName+'</p></a>'
				+ '</div>';
				output.append(topCategories+categories);
			});
		},
		error: function(){
		   output.text('There was an error loading the data.');
		}
	});
});