 // Initialize Firebase
	 
	  database = firebase.database();
	  var ref = database.ref('place');
	  ref.on('value',gotData,errData);
	
	function gotData(data){
		var table = document.getElementById("example");
	    var z = 0;
	    var t = 0;
		var place = data.val();
		var key = Object.keys(place);
		console.log("continent=>"+key);
		for(var i = 0; i < key.length; i++){
			var k = key[i];
			var country = place[k];
			var countrykey = Object.keys(country);
			
			for(var j = 0 ; j < countrykey.length; j++){
				
				var ckey = countrykey[j];
				var indiviual_country = country[ckey];
				var indiviual_country_key = Object.keys(indiviual_country);
				
					for(var x = 0 ; x < indiviual_country_key.length; x++){
						
						
						var ic_key = indiviual_country_key[x];
						var tourspot = indiviual_country[ic_key];
						
						if( z < 3){
						
						var bg= document.getElementById("bg"+z);
						bg.style.background = "url("+tourspot.img+")";
						var budget = document.getElementById("budgets"+z);
						budget.innerHTML = tourspot.budget;
						var day = document.getElementById("days"+z);
						day.innerHTML = tourspot.days+" Travel days";
						var tour = document.getElementById("tourspot"+z);
						tour.innerHTML = ic_key;
						z++;
						}
						
						
					}
			}
		}
		
	}
	function errData(err){
		console.log('error');
		console.log(err);
	}

	