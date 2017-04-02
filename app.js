$("document").ready(function() {
	console.log("Here");
	var FOOD2FORK_BASE_URL = "http://food2fork.com/api/search"; 
	function getDataFromApi(searchTearm, callback) {
		var query = {
			key: "d48fb246d87e5aa80bfb9aa7d21cfe84",
			q: searchTerm,
			page: 2,
		};
		console.log("line 10")
		$.getJSON(FOOD2FORK_BASE_URL,query, function(data, status, z) {
		console.log("data", data, "status", status, "z", z);
      	console.log(data.items);
		})
	}
});


    
    /*  for(var i = 0; i < data.items.length; i++) {
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