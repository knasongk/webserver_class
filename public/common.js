// common js code

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
