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
    document.getElementById('signupForm').addEventListener('submit', signupUser);
    document.getElementById('cancelSignup').addEventListener('click', cancelSignup);
    document.getElementById('loginForm').addEventListener('submit', loginUser);
    document.getElementById('cancelLogin').addEventListener('click', cancelLogin);
    document.getElementById('request_password_reset').addEventListener('click', requestPasswordReset);
    document.getElementById('logoutForm').addEventListener('submit', logoutUser);
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

	  return responseJson;
	}  
	catch(err) {
	  console.error(err);
	  alert('an error has occurred in makeRequest');
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

	const query = `mutation { addCity(id: "${dest.id}", city: "${dest.city}", country: "${dest.country}", language: "${dest.language}") ${ citySelection }}`;

	const retCity = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query})
	});

        const { data, errors } = retCity;

	console.log("retCity is ", data.addCity.city);

	if(data.addCity.city === '')
		alert('Fail to add city ' + dest.city);
	else
		alert('The city ' + data.addCity.city + ' was added successfully');

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
                  console.log("city = ", data.cityByCountry[i].city);
		  cityStr += (data.cityByCountry[i].city + ', ');
		}
		console.log("cityStr = ", cityStr);

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
	console.log("theme.id = ", theme.id);
	console.log("theme.description = ", theme.description);

	const query = `mutation { updateTheme(id: "${theme.id}", description: "${theme.description}") { wasSuccessful }}`;

	const retStat = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query})
	});

        const { data, errors } = retStat;

	console.log("data.updateTheme.wasSuccessful = ", data.updateTheme.wasSuccessful);

	if(data.updateTheme.wasSuccessful)
		alert('Succeed in update theme id' + theme.id);
	else
		alert('Fail to update theme id ' + theme.id);
};

const deleteCity = async e => {
	e.preventDefault();

	const dest = parseDeleteForm('deleteForm');
	console.log("dest.id = ", dest.id);

	const query = `mutation { deleteCity(id: "${dest.id}") { wasSuccessful }}`;

	const retStat = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query})
	});

        const { data, errors } = retStat;

	console.log("data.deleteCity.wasSuccessful = ", data.deleteCity.wasSuccessful);

	if(data.deleteCity.wasSuccessful)
		alert('Succeed to delete city id' + dest.id);
	else
		alert('Fail to delete city id ' + dest.id);

};

const signupUser = async e => {
	e.preventDefault();

	console.log("in signupUser");

	const user = {
	  displayName: document.querySelector('#display_name').value,
	  email: document.querySelector('#email_address').value,
	  username: document.querySelector('#signup-username').value,
	  password: document.querySelector('#signup-password').value,
	};

	console.log("user.displayName = ", user.displayName);
	console.log("user.email = ", user.email);
	console.log("user.username = ", user.username);
	console.log("user.password = ", user.password);

	const query = `mutation ($user: UserInput!) {
	   signup(user: $user) {
	      displayName
	      username
	   }
	 }`;

	 variables = {user};

	 const signedUpUser = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query, variables})
	 });

         const { data, errors } = signedUpUser;

	 if(!data.signup)
	 {
	     alert('fail to signup user ' + user.username);
		return;
         }

	  console.log("data.signup.username = ", data.signup.username);
	  console.log("data.signup.displayName = ", data.signup.displayName);

	  alert('User ' + data.signup.username + ' has signed up for the travel service');
};

const cancelSignup = async e => {
	e.preventDefault();
	console.log("in cancelSignup");
}

const loginUser = async e => {
	e.preventDefault();

	console.log("in loginUser");

	const userCredential = {
	  username: document.querySelector('#login-username').value,
	  password: document.querySelector('#login-password').value,
	};

	console.log("userCredential.username = ", userCredential.username);
	console.log("userCredential.password = ", userCredential.password);

	const query = `mutation ($userCredential: LoginInput!) {
	   login(loginInput: $userCredential) {
	      displayName
	      username
	   }
	 }`;

	 variables = {userCredential};

	 const loginUser = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query, variables})
	 });

         const { data, errors } = loginUser;

	 if(!data.login)
	 {
	     alert('fail to login user ' + userCredential.username);
		return;
         }

	  console.log("data.login.username = ", data.login.username);
	  console.log("data.login.displayName = ", data.login.displayName);

	  alert('User ' + data.login.username + ' has log into the travel service');
};

const cancelLogin = async e => {
	e.preventDefault();
	console.log("in cancelLogin");
}

const requestPasswordReset = async e => {
	e.preventDefault();
	console.log("in requestPasswordReset");


	const username = document.querySelector('#login-username').value;
	const query = `mutation ($username: String!) {
	   requestPasswordReset(username: $username) {
	      wasSuccessful
	   }
	 }`;

	 variables = {username};

	 const retStat = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query, variables})
	 });

	const { data, errors } = retStat;

	if(!data.requestPasswordReset.wasSuccessful) 
	     alert('Fail to send a reset email to ' + username);
	else
             alert('A reset email with a code has been sent to your email address');
}

const logoutUser = async e => {
	e.preventDefault();

	console.log("in logoutUser");

	const query = `mutation {
	   logout { wasSuccessful }
	 }`;

	 const retStat = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query})
	 });

        const { data, errors } = retStat;

	console.log("data.logout.wasSuccessful = ", data.logout.wasSuccessful);

	if(!data.logout.wasSuccessful)
		alert('Fail to logout');
}

function getTarget(e) {
	if(!e) {
	e = window.event;
	} 

	return e.target || e.srcElement;
}

const cancelSignupUser = async e => {
	e.preventDefault();

	console.log("in cancelSignupUser");
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
