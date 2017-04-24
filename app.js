$("document").ready(function() {
	
	var TASTEKID_BASE_URL = "https://www.tastekid.com/api/similar?type=books&info=1&k=266210-BooksPle-JSOLR0JY&q=";
	
	function getDataFromApi(searchTerm, callback) {
		var settings = {
			url: TASTEKID_BASE_URL+searchTerm,
			dataType: "jsonp",
			jsonpCallback: "logResults",
			type: 'Get',
			success: callback,
		};
		$.ajax(settings);
	}
	//On click of search button fade it out and fade in the search box and submit button.
	$(".search").click(function() {
		$('#new-search').fadeOut('fast');
		$('#results').html('');
		console.log('search-li clicked');
		$(this).fadeOut("fast");
		$('#search-box-container').fadeIn('slow');
	})

	function displaySearchData(data) {
		console.log(data.Similar.Results);
		if(data.Similar.Results.length === 0) {
			alert("That title not found. Please check spelling or try a different title.");
			
		} else {
			for(var i = 0; i< data.Similar.Results.length; i++) {
				console.log(data.Similar.Results[i]);
				var results = data.Similar.Results[i];
				$("#results").append("<li class='book-title'>" + results.Name + "</li><br><li class='teaser'>" + results.wTeaser + "<br><a href=" + results.wUrl + "><br>Click here for more information</a></li><br>");
				$('#search-box-container').fadeOut('fast');
				$('#new-search').fadeIn('slow');
				$('.search').fadeIn('slow');
			}
		}
	}

	function reset() {
    		document.getElementById("search-box-container").reset();
		};

	

	$("#search-box-container").submit(function(event) {
		console.log("clicked, submitted");
		event.preventDefault();
		getDataFromApi($("#search-box").val(), displaySearchData);
		reset();
	});


});	
	
 