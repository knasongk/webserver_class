window.onload = function() {
    var button1 = document.querySelector("#tour1");
    // add event listener to the id tour1 click
    button1.addEventListener("click",showTour1,false);

    var button2 = document.querySelector("#tour2");
    // add event listener to the id tour2 click
    button2.addEventListener("click",showTour2,false);

    document.getElementById('addForm').addEventListener('submit', addCity);
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
const fields = ['id', 'city', 'country', 'language'];

const parseForm = formId => {
	const city = fields.reduce((city,field) => {
	city[field] = parseField(formId, field);
	return city;
}, {});

   return city;
};


const makeRequest = async (url, params) => {
	try {
	  const response = await fetch(url, params);

	  if(!response.ok) throw new Error(response.statusText);

	   const responseJson = await response.json();

         	console.log("responseJson.myJSON = ", responseJson.myJSON);
		responseObj = JSON.parse(responseJson.myJSON);
		console.log("responseObj.addedCity.dest_city = ", 
			responseObj.addedCity.dest_city);

		alert("Insert " + responseObj.addedCity.dest_city + " successfully");

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

	const city = parseForm('addForm');
	console.log("city.id = ", city.id);
	console.log("city.city = ", city.city);
	console.log("city.country = ", city.country);
	console.log("city.language = ", city.language);

	var kenJason = JSON.stringify(city);
	console.log("kenJason = ", kenJason);
	
	const wasSuccess = await makeRequest('/api/addCity', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify(city)
	});

	if(!wasSuccess) alert ('addCity failed');
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
