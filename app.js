$("document").ready(function() {
	console.log("Here");
	var TASTEKID_BASE_URL = "https://www.tastekid.com/api/similar?type=books&info=1&q=";
	
	function getDataFromApi(searchTerm, callback) {
		var settings = {
			url: TASTEKID_BASE_URL+searchTerm,
			dataType: "jsonp",
			jsonpCallback: "logResults",
			type: 'Get',
			success: callback
	 	};
		$.ajax(settings);
		
	}
	console.log('worked');

	$("#search-li").click(function() {
		console.log('search-li clicked');
		$(this).hide("slow");
		$('.search-box-container').show('slow');
	})

	function displaySearchData(data) {
		console.log(data.Similar.Results);
		for(var i = 0; i< data.Similar.Results.length; i++) {
			console.log(data.Similar.Results[i]);
			
			var results = data.Similar.Results[i];
			$("#results").append("<li>" + results.Name + "</li><br>" + "<li>" + results.wTeaser + "</li><br>");
		}
	}


	$("#submit").click(function() {
		//event.preventDefault();
		console.log("clicked");
		getDataFromApi($("#search-box").val(), displaySearchData);
				
	});
});




 