$("document").ready(function() {
	console.log("Here");
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
	console.log('worked');

	$(".search").click(function() {
		$('#new-search').hide('fast');
		$('#results').html('');
		console.log('search-li clicked');
		$(this).hide("slow");
		$('#search-box-container').show('slow');
	})

	function displaySearchData(data) {
		console.log(data.Similar.Results);
		if(data.Similar.Results.length === 0) {
			alert("Please enter a valid book title");
			
			
		} else {
			for(var i = 0; i< data.Similar.Results.length; i++) {
				
				console.log(data.Similar.Results[i]);
				var results = data.Similar.Results[i];
				$("#results").append("<li class='book-title'>" + results.Name + "</li><br><li>" + results.wTeaser + "<br><a href=" + results.wUrl + ">Click for more information</a></li><br>");
				$('#search-box-container').hide('slow');
				$('#new-search').show('slow');
				$('.search').show('fast');
			}
		}
	}

	function reset() {
    		document.getElementById("search-box-container").reset();
		};

	

	$("#submit").click(function() {
    	
		console.log("clicked");
		getDataFromApi($("#search-box").val(), displaySearchData);
		reset();
	});


});	
	
 