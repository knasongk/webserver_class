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
	  const response = await fetch(url, params);

	if(!response.ok) throw new Error(response.statusText);

	const responseJson = await response.json();


       	console.log("responseJson.myJSON = ", responseJson.myJSON);

	alert(responseJson.myJSON); 

		/*
	responseObj = JSON.parse(responseJson.myJSON);
	console.log("responseObj.addedCity.dest_city = ", 
		responseObj.addedCity.dest_city);

	alert("Insert " + responseObj.addedCity.dest_city + " successfully");
	*/


	return true;
	}  
	catch(err) {
		console.error(err);
		alert('an error has occurred');
	};

	return false;
};

const addCity = async e => {
	e.preventDefault();

	const dest = parseAddForm('addForm');
	console.log("dest.id = ", dest.id);
	console.log("dest.city = ", dest.city);
	console.log("dest.country = ", dest.country);
	console.log("dest.language = ", dest.language);

	/* confirm that the body gets the correct info from the gui */
	/* note: the addCityRoute() in the src/index.js somehow 
	 * cannot read the req.body.  Not sure why not!
	 * <need help>
	 */

	var body_Jason = JSON.stringify(dest);
	console.log("body_Jason = ", body_Jason);
	
	const wasSuccess = await makeRequest_2('/api/addCity', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify(dest)
	});

	if(!wasSuccess) alert ('addCity failed');
};

const retrieveCity = async e => {
	e.preventDefault();

	const dest = parseRetrieveForm('retrieveForm');
	console.log("dest.country = ", dest.country);

	/* confirm that the body gets the correct info from the gui */
	/* note: the retrieveCityRoute() in the src/index.js somehow 
	 * cannot read the req.body.  Not sure why not!
	 * <need help>
	 */

	var body_Jason = JSON.stringify(dest);
	console.log("body_Jason = ", body_Jason);
	
	const wasSuccess = await makeRequest_2('/api/retrieveCity', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify(dest)
	});

	if(!wasSuccess) alert ('retrieveCity failed');
};

const updateTheme = async e => {
	e.preventDefault();

	const theme = parseUpdateForm('updateForm');
	console.log("theme.id = ", theme.id);
	console.log("theme.description = ", theme.description);

	/* confirm that the body gets the correct info from the gui */
	/* note: the updatePrefRoute() in the src/index.js somehow 
	 * cannot read the req.body.  Not sure why not!
	 * <need help>
	 */

	var body_Jason = JSON.stringify(theme);
	console.log("body_Jason = ", body_Jason);
	
	const wasSuccess = await makeRequest('/api/updateTheme', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify(theme)
	});

	if(!wasSuccess) alert ('updateTheme failed');
};

const deleteCity = async e => {
	e.preventDefault();

	const dest = parseDeleteForm('deleteForm');
	console.log("dest.id = ", dest.id);

	/* confirm that the body gets the correct info from the gui */
	/* note: the addCityRoute() in the src/index.js somehow 
	 * cannot read the req.body.  Not sure why not!
	 * <need help>
	 */

	var body_Jason = JSON.stringify(dest);
	console.log("body_Jason = ", body_Jason);
	
	const wasSuccess = await makeRequest('/api/deleteCity', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify(dest)
	});

	if(!wasSuccess) alert ('deleteCity failed');
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
