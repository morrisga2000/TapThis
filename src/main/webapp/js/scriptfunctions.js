
$(function(){
var breweryLink;
var beerName;
var breweryName;

// need a way to pass user search into below API string in place of 60 minute

	var apiCall = $.get( "https://api.untappd.com/v4/search/beer?q=60 Minute&client_id=B2397B44662D900D4265BF03E035CE16D5CF4846&client_secret=2AE5A2667723D53FDDDCF2410EB5412F91FE433A", function( data ) {
	  		$.each(data.response.beers.items, function( index, value ) {
				

			//	var beerImg = value.beer.beer_label
			 breweryLink = value.brewery.contact.url
			 beerName = value.beer.beer_name
			 breweryName = value.brewery.brewery_name
			var beerInfo = breweryName + " " + beerName
			 				
				$("#wrapper").append("<div style='border:3px solid black' class='col-md-2'>");
				$("#wrapper").append("<ul>");
				$("#wrapper").append("<li><a href='/beerDetails?beerInfo=" + beerInfo +" 'id='userSelection'>" + value.beer.beer_name + "</a></li>");
				$("#wrapper").append("<li>" + '<a href= "' + breweryLink +'">' + value.brewery.brewery_name +  '</a>' + "</li>");
				$("#wrapper").append('<img src="' + value.beer.beer_label + '">');
				$("#wrapper").append("<li>" + "Abv :  " + value.beer.beer_abv + "</li>");
				$("#wrapper").append("<li>" + "Style :  " + value.beer.beer_style + "</li>");
			//	$("#wrapper").append("<li>" + value.brewery.contact.url +  "</li>");
			//	$("#wrapper").append("<li id='comboSearch'>" + beerName + " " + breweryName +  "</li>");
			//	console.log(beerName + " " + breweryName);
				
				$("#wrapper").append("</ul><br>");
			//	$("#wrapper").(+ beerName + breweryName );
				$("#wrapper").append("</div>");
				


				


			
	  	//		console.log(specificAPICall)
		// 		console.log(breweryLink)
  		// 		console.log(value.beer.beer_name)
  		// 		console.log(value.beer.beer_abv)
  		// 		console.log(value.beer.beer_style)
			});	





	}, "json" ).done(function(){

	//	beerName = $.onClick("#userSelection")
			 
		console.log( " api call and list call complete")
		// console.log(breweryLink)
		// console.log(beerName)
		// console.log(breweryName)
	});

	$(function(){
		
		
		function $_GET(param) {
			var vars = {};
			window.location.href.replace( location.hash, '' ).replace( 
				/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
				function( m, key, value ) { // callback
					vars[key] = value !== undefined ? value : '';
				}
			);

			if ( param ) {
				return vars[param] ? vars[param] : null;	
			}
			return vars;
		}

		$.get( "https://api.untappd.com/v4/search/beer?q="+ $_GET(beerInfo) +"&client_id=B2397B44662D900D4265BF03E035CE16D5CF4846&client_secret=2AE5A2667723D53FDDDCF2410EB5412F91FE433A", function( data ) {
			
			console.log(beerInfo)
			
		}, "json" )
	})

	
	
	

});  //top function closing





