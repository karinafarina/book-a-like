$("document").ready(function() {
	console.log("Here");
	var FOOD2FORK_BASE_URL = "http://food2fork.com/api/search"; 
	function getDataFromApi(searchTearm, callback) {
		var query = {
			key: "d48fb246d87e5aa80bfb9aa7d21cfe84",
			q: searchTerm,
			page: 2,
		};
		console.log("line 10");
		console.log(searchTerm);
		$.getJSON(FOOD2FORK_BASE_URL, query, function(data) {
			console.log(data);
		})
	};

		$("#submit").click(function() {
			//event.preventDefault();
			console.log("clicked");
			getDataFromApi("flax", function() {
				console.log("callback invoked");
			})
		})
	
});


		






   