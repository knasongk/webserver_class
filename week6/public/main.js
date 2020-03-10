const citySelection = `{
  city
}`;


window.onload = function() {
    var button1 = document.querySelector("#tour1");
    // add event listener to the id tour1 click
    button1.addEventListener("click",showTour1,false);

    var button2 = document.querySelector("#tour2");
    // add event listener to the id tour2 click
    button2.addEventListener("click",showTour2,false);

    document.getElementById('addForm').addEventListener('submit', addCity);
    document.getElementById('retrieveForm').addEventListener('submit', retrieveCity);
    document.getElementById('updateForm').addEventListener('submit', updateTheme);
    document.getElementById('deleteForm').addEventListener('submit', deleteCity);
}

const parseField = (formId, fieldName) => {
	console.log("formId  = ", formId);
	console.log("fieldName = ", fieldName);

      const inputSelector = `#${formId} [name="${fieldName}"]`;

      console.log("inputSelector = ", inputSelector);

      const input = document.querySelector(inputSelector);
      return input.value || input.placeholder;
};


//List of all the input destination fields.
const addFields = ['id', 'city', 'country', 'language'];

const parseAddForm = formId => {
	const dest = addFields.reduce((dest,field) => {
	dest[field] = parseField(formId, field);
	return dest;
}, {});

   return dest;
};

const retrieveFields = ['country'];

const parseRetrieveForm = formId => {
	const dest = retrieveFields.reduce((dest,field) => {
	dest[field] = parseField(formId, field);
	return dest;
}, {});

   return dest;
};

const updateFields = ['id', 'description'];

const parseUpdateForm = formId => {
	const theme = updateFields.reduce((theme,field) => {
	theme[field] = parseField(formId, field);
	return theme;
}, {});

   return theme;
};

const deleteFields = ['id'];

const parseDeleteForm = formId => {
	const dest = deleteFields.reduce((dest,field) => {
	dest[field] = parseField(formId, field);
	return dest;
}, {});

   return dest;
};

////////////////////////////////////////////////////////////////////

const makeRequest = async (url, params) => {
        try {
	  const response = await fetch(url, params);

        if(!response.ok) throw new Error(response.statusText);

	   const responseJson = await response.json();


   	if(!responseJson.success) throw new Error(responseJson.message);
	   return true;
	}  
	catch(err) {
		console.error(err);
		alert('an error has occurred');
	};

	return false;
};

const makeRequest_2 = async (url, params) => {
	try {

    	console.log("in makeRequest_2");

	  const response = await fetch(url, params);

	  if(!response.ok) throw new Error(response.statusText);

	  const responseJson = await response.json();

	// problem:  Cannot get the correct data from the server resolvers getCity()
	console.log("makeRequest_2: responseJson.data = ", responseJson.data);
	console.log("makeRequest_2: responseJson.errors = ", responseJson.erros);

          const { data, errors } = responseJson;

	console.log("makeRequest_2: data = ", data);
	
	  return responseJson;
	}  
	catch(err) {
	  console.error(err);
	};
};

const addCity = async e => {
	e.preventDefault();

	try {
	const dest = parseAddForm('addForm');
	//console.log("dest.id = ", dest.id);
	//console.log("dest.city = ", dest.city);
	//console.log("dest.country = ", dest.country);
	//console.log("dest.language = ", dest.language);

	var body_Jason = JSON.stringify(dest);
	//console.log("body_Jason = ", body_Jason);
	
	const retCity = await makeRequest_2('/api/addCity', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify(dest)
	});

	//console.log("retCity is ", retCity.dest_city);

	if(retCity.dest_city === '')
		alert('Fail to add city ' + dest.city);
	else
		alert('The city ' + retCity.dest_city + ' was added successfully');
	}
	catch(err) {
		console.error(err);
		alert('Fail to add city ' + dest.city);
	}
};

const retrieveCity = async e => {
	e.preventDefault();

	try {
	const dest = parseRetrieveForm('retrieveForm');
	console.log("dest.country = ", dest.country);

	const query = `query { cityByCountry(country: "${dest.country}") ${citySelection} }`;
	console.log("query = ", query);

		
	var body_Jason = JSON.stringify({query});
	console.log("body_Jason = ", body_Jason);
		
	const retCityList = await makeRequest_2('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query}) 
	});


	var cityStr = '';

	if(retCityList.length > 0)
	{
		for(i=0; i<retCityList.length; i++)
		{
                  console.log("city = ", retCityList[i].city);
		  cityStr += (retCityList[i].city + ', ');
		}
		console.log("cityStr = ", cityStr);
		alert(cityStr);
	}
	else
		alert('Cannot find city associated with country ' + dest.country );


         }
	catch(err) {
		console.error(err);
		alert('Fail find city for country' + dest.country);
	}
};

/*
const retrieveCity = async e => {
	e.preventDefault();

	try {
	const dest = parseRetrieveForm('retrieveForm');
//	console.log("dest.country = ", dest.country);

	var body_Jason = JSON.stringify(dest);
//	console.log("body_Jason = ", body_Jason);
	
	const retCityList = await makeRequest_2('/api/retrieveCity', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify(dest)
	});

	var cityStr = '';

	if(retCityList.length > 0)
	{
		for(i=0; i<retCityList.length; i++)
		{
                  console.log("city = ", retCityList[i].city);
		  cityStr += (retCityList[i].city + ', ');
		}
		console.log("cityStr = ", cityStr);
		alert(cityStr);
	}
	else
		alert('Cannot find city associated with country ' + dest.country );

         }
	catch(err) {
		console.error(err);
		alert('Fail find city for country' + dest.country);
	}
};
*/

const updateTheme = async e => {
	e.preventDefault();

	const theme = parseUpdateForm('updateForm');
	console.log("theme.id = ", theme.id);
	console.log("theme.description = ", theme.description);

	var body_Jason = JSON.stringify(theme);
	console.log("body_Jason = ", body_Jason);
	
	const SuccessStat = await makeRequest('/api/updateTheme', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify(theme)
	});

	if(SuccessStat == true)
		alert('Succeed to updateTheme with description ' + theme.description);
	else
		alert('Fail to updateTheme with description ' + theme.description);
};

const deleteCity = async e => {
	e.preventDefault();

	const dest = parseDeleteForm('deleteForm');
	console.log("dest.id = ", dest.id);

	var body_Jason = JSON.stringify(dest);
	console.log("body_Jason = ", body_Jason);
	
	const SuccessStat = await makeRequest('/api/deleteCity', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify(dest)
	});

	if(SuccessStat == true)
		alert('Succeed to delete city id' + dest.id);
	else
		alert('Fail to delete city id ' + dest.id);
};
	

//when the button1 is click call showTour1() to fetch the tour1 from the server 
function showTour1() {
    fetch('/api/tour/1')
	.then(x =>x.text())
	.then(alert);
};

//when the button2 is click call showTour2() to fetch the tour1 from the server 
function showTour2() {
    fetch('/api/tour/2')
	.then(x =>x.text())
	.then(alert);
};
