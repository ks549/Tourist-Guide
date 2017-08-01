 // Initialize Firebase
	 
	  database = firebase.database();
	  var ref = database.ref('place');
	  ref.on('value',gotData,errData);
	  function elementcreate(x){
	  	var item = document.createElement('div');
	  }
	function append(tourspot, img,days, budget) {
            var grid = document.querySelector('#columns');
            var item = document.createElement('div');
            var att = document.createAttribute("class");       
			att.value = "mdl-cell mdl-cell--4-col";                          
			item.setAttributeNode(att); 
            var h = `<div class="demo-card-wide mdl-card mdl-shadow--2dp">
				  <div class="mdl-card__title"  style="background-image:url(`+ img+`">
				    <h2 class="mdl-card__title-text" >`+tourspot+`</h2>
				  </div>
				 <div class="mdl-card__supporting-text" >`+days+` Travel days</div>
				  <div class="mdl-card__actions mdl-card--border">
				    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" >`+budget+`</a>
				    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Book Now</button>
				  </div>
				  <div class="mdl-card__menu">
				    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
				      <i class="material-icons">share</i>
				    </button>
				  </div>
				</div>`;
            
           grid.appendChild(item);
           item.innerHTML = h;
        }
       

	function gotData(data){
		
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
						
						if((t == 0) || (t % 3 == 0)){

						}
						var ic_key = indiviual_country_key[x];
						var tourspot = indiviual_country[ic_key];
						append(ic_key,tourspot.img,tourspot.days,tourspot.budget);
						
					}
			}
		}
		
	}
	function errData(err){
		console.log('error');
		console.log(err);
	}

	