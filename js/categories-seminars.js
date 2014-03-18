function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

$(document).ready(function(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});
	var ThisCategoryId = getUrlVars()["id"];
	
	var output = $('#catseminars');
	$.ajax({
		type: "GET",
		url: 'http://www.just-online.biz/sites/seminaria/phone/categories-seminars.php?ThisCategoryId='+ThisCategoryId,
		timeout: 5000,
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		success: function(data, status){
		var top = '<div class="bread-crumb"></div>'
							+ '<div class="bread-crumb"></div>';
			$.each(data, function(i,item){ 
				var topseminars = '<div class="container no-bottom">'
				+ '<div class="blog-post">'
				+ '<a href="'+item.fulllink+'">'
				+ '<img class="responsive-image" src="'+item.image+'" >'
				+ '</a>'
				+ '<h4>'+item.Title+'</h4>'
				+ '<p>'+item.Fulltext+'</p>'
				+ '<ul class="blog-lists">'
				+ '<li class="blog-time">'+item.created+'</li>'
				+ '<li class="blog-cat">'+item.CatName+'</li>'
				+ '<li class="blog-more"><a href="'+item.fulllink+'">Περισσότερα</a></li>'
				+ '</ul>'
				+ '</div>'
				+ '<div class="decoration"></div>'
				output.append(top+topseminars);
			});
		},
		error: function(){
		   output.text('There was an error loading the data.');
		}
	});
	
});