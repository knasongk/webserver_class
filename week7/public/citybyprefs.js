window.onload = function() {
   
    document.getElementById('citybyprefsForm').addEventListener('submit', cityByPref);
};

const cityByPref = async e => {
	e.preventDefault();

    try {
    console.log("in cityByPref");

    var ele = document.getElementsByName('topic');
    
    for(i=0; i<ele.length; i++) {
        if(ele[i].checked) {
             console.log("checked for value = ", ele[i].value);
             prefValue = ele[i].value;

        }
    }

    const dest = {preference: prefValue};
    const citySelection = ` { city } `;

    console.log("dest.preference = ", dest.preference);

    const query = `query { cityByPreference(preference: "${dest.preference}") ${citySelection} }`;
    console.log("query = ", query);

    const retCityList = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query}) 
	  });

      const { data, errors } = retCityList;

      var cityStr = '';
      
      if(data.cityByPreference.length > 0)
      {
		for(i=0; i<data.cityByPreference.length; i++)
		{
                  //console.log("city = ", data.cityByPreference[i].city);
		  cityStr += (data.cityByPreference[i].city + ', ');
        }
       
        document.querySelector('#current-pref-cities').innerText = 
        `${cityStr} `;
        

		//console.log("cityStr = ", cityStr);

		// display list of cities in a popup box
		//alert(cityStr);
	  }
	  else
		alert('Cannot find city associated with preference ' + dest.preference );

        }
	catch(err) {
		console.error(err);
		alert('Fail find city for preference ' + dest.preference);
    }

};

