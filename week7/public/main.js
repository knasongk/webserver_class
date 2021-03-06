

const citySelection = `{
  city
}`;

window.onload = function() {
    var button1 = document.querySelector("#tour1");
    // add event listener to the id tour1 click
   // button1.addEventListener("click",showTour1,false);

    var button2 = document.querySelector("#tour2");
    // add event listener to the id tour2 click
    //button2.addEventListener("click",showTour2,false);

	/*
    document.getElementById('addForm').addEventListener('submit', addCity);
    document.getElementById('retrieveForm').addEventListener('submit', retrieveCity);
    document.getElementById('updateForm').addEventListener('submit', updateTheme);
	document.getElementById('deleteForm').addEventListener('submit', deleteCity);
*/

	getCurrentUser();
	
};

const getCurrentUser = async e => {
    const query = `query { currentUser { displayName username} }`;

    const user = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query})
	 });

    const { data, errors } = user;

    if(data.currentUser !== null)
    {
	//console.log("before calling setCurrentUser()");
        setCurrentUser(data.currentUser); 
    }
}


const parseField = (formId, fieldName) => {
	//console.log("formId  = ", formId);
	//console.log("fieldName = ", fieldName);

      const inputSelector = `#${formId} [name="${fieldName}"]`;

      //console.log("inputSelector = ", inputSelector);

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

const setCurrentUser = currentUser => {
	document.querySelector('#welcome-message').innerText = 
		currentUser ? `Welcome ${currentUser.username} to Travel Unscripted` : '';
};

const retrieveCity = async e => {
	e.preventDefault();

	try {
	  const dest = parseRetrieveForm('retrieveForm');
	  //console.log("dest.country = ", dest.country);

	  const query = `query { cityByCountry(country: "${dest.country}") ${citySelection} }`;
	  //console.log("query = ", query);

	 // var body_Jason = JSON.stringify({query});
	  //console.log("body_Jason = ", body_Jason);
		
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
		//console.log("cityStr = ", cityStr);

		// display list of cities in a popup box
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

const updateTheme = async e => {
	e.preventDefault();

	const theme = parseUpdateForm('updateForm');
	//console.log("theme.id = ", theme.id);
	//console.log("theme.description = ", theme.description);

	const query = `mutation { updateTheme(id: "${theme.id}", description: "${theme.description}") { wasSuccessful }}`;

	const retStat = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query})
	});

        const { data, errors } = retStat;

	//console.log("data.updateTheme.wasSuccessful = ", data.updateTheme.wasSuccessful);

	if(data.updateTheme.wasSuccessful)
		alert('Succeed in update theme id' + theme.id);
	else
		alert('Fail to update theme id ' + theme.id);
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
