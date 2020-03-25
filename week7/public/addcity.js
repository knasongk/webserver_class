window.onload = function() {
   
    document.getElementById('addForm').addEventListener('submit', addCity);
	document.getElementById('deleteForm').addEventListener('submit', deleteCity);
    getCurrentVacationSpots();
};

const getCurrentVacationSpots = async e => {
    const query = `query { availCity { city } }`;

    const retCityList = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query})
	 });

    const { data, errors } = retCityList;

    var cityStr = '';

    if(data.availCity.length > 0)
        {
      for(i=0; i<data.availCity.length; i++)
      {
                //console.log("city = ", data.availCity[i].city);
        cityStr += (data.availCity[i].city + ', ');
      }

      document.querySelector('#current-vacation-spots').innerText = 
      `${cityStr} `;

      //console.log("cityStr = ", cityStr);
      //alert(cityStr);
    }
}

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

const deleteCity = async e => {
    e.preventDefault();
    
    try {

    const cityInfo = {
        city: document.querySelector('#deletecity-city').value,
    };    

    const query = `mutation ($cityInfo: DeleteCityInput!) {
        deleteCity(deleteCityInput: $cityInfo) {
           wasSuccessful
        }
      }`;

    variables = {cityInfo};

	const retStat = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
        method: 'POST',
		body: JSON.stringify({query, variables})
	});

        const { data, errors } = retStat;

	//console.log("data.deleteCity.wasSuccessful = ", data.deleteCity.wasSuccessful);

	if(data.deleteCity.wasSuccessful) {
        //alert('Succeed to delete city ' + cityInfo.city);
         // clear input text
        document.querySelector('#deleteForm').reset();
   
        getCurrentVacationSpots();
    }
	else
		alert('Fail to delete city ' + cityInfo.city);
    }
    catch(err) {
        console.error(err);
        alert('Fail to delete city ' + cityInfo.city);

    }

};
