$("document").ready(function() {
	console.log("Here");
	var TASTEKID_BASE_URL = "https://www.tastekid.com/api/similar?type=books&info&q=";
	
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

	function displaySearchData(data) {
		console.log(data);
		for(var i = 0; i< data.results.length; i++) {
			console.log(data.results[i]);
		}
	}


	$("#submit").click(function() {
		//event.preventDefault();
		console.log("clicked");
		getDataFromApi($("#search-box").val(), displaySearchData);
				
	});
});




 /*for(var i = 0; i < data.items.length; i++) {
        console.log(data.items[i]);
        const item = data.items[i]; 
        if(item.id.kind !== "youtube#channel") {
          $(".js-search-results").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ item.id.videoId + '" frameborder="0" allowfullscreen>' + item.id.videoId + '"><img class="thumbnail" src="' + item.snippet.thumbnails.default.url + '"></iframe>');
        } else {
          console.log("==youtube#channel");
        } 
      }
    });
  }

  $("button").click(function(event) {
    event.preventDefault();
    console.log("clicked");
    getDataFromApi($("#search-box").val());
  })
});*/





