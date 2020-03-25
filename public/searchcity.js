window.onload = function() {
   
    document.getElementById('retrieveForm').addEventListener('submit', retrieveCity);
};

const retrieveCity = async e => {
	e.preventDefault();

	try {
      const dest = {
        country: document.querySelector('#retrievecity-country').value,
    };

      //console.log("dest.country = ", dest.country);
      
      const citySelection = ` { city }`;

	  const query = `query { cityByCountry(country: "${dest.country}") ${citySelection} }`;
	  //console.log("query = ", query);
		
        const retCityList = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query}) 
	  });

      const { data, errors } = retCityList;

	  var cityStr = '';

	  if(data.cityByCountry.length > 0)
    	  {
		for(i=0; i<data.cityByCountry.length; i++)
		{
                  //console.log("city = ", data.cityByCountry[i].city);
		  cityStr += (data.cityByCountry[i].city + ', ');
        }
       
        
        document.querySelector('#current-selected-cities').innerText = 
        `${cityStr} `;
        

		//console.log("cityStr = ", cityStr);

		// display list of cities in a popup box
		//alert(cityStr);
	  }
	  else
		alert('Cannot find city associated with country ' + dest.country );

        }
	catch(err) {
		console.error(err);
		alert('Fail find city for country' + dest.country);
	}
};

const addCity = async e => {
	e.preventDefault();

	try {  
    const cityInfo = {
        city: document.querySelector('#addcity-city').value,
        country: document.querySelector('#addcity-country').value,
        language: document.querySelector('#addcity-language').value,
    };

    //console.log("cityInfo.city = ", cityInfo.city);
    //console.log("cityInfo.country = ", cityInfo.country);
    //console.log("cityInfo.language = ", cityInfo.language);

    const query = `mutation ($cityInfo: AddCityInput!) {
        addCity(addCityInput: $cityInfo) {
           city
        }
      }`;

    //console.log("query = ", query);

    variables = {cityInfo};

	const retCity = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query, variables})
	});

        const { data, errors } = retCity;

	//console.log("retCity is ", data.addCity.city);

	if(data.addCity.city === '')
        alert('Fail to add city ' + cityInfo.city);
        
        /*
	else{
        document.querySelector('#addcity-message').innerText = 
          `The city ${data.addCity.city} was added successfully`;
		//alert('The city ' + data.addCity.city + ' was added successfully');
    }
    */

    // clear input text
    document.querySelector('#addForm').reset();

    getCurrentVacationSpots();
	}
	catch(err) {
		console.error(err);
		alert('Fail to add city ' + cityInfo.city);
	}
};

