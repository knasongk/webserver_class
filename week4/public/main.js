window.onload = function() {
    var button1 = document.querySelector("#tour1");
    // add event listener to the id tour1 click
    button1.addEventListener("click",showTour1,false);

    var button2 = document.querySelector("#tour2");
    // add event listener to the id tour2 click
    button2.addEventListener("click",showTour2,false);

    document.getElementById('addForm').addEventListener('submit', addCity);
}

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


//	const city = parseForm('addCity');
	
	const wasSuccess = await makeRequest('/api/addCity', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({a:1})
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
