
window.onload = function() {
   
    document.getElementById('logoutForm').addEventListener('submit', logoutUser);

	getCurrentLogOutUser();
};

const getCurrentLogOutUser = async e => {
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
        setLogoutMessage(data.currentUser); 
    }
}

const setLogoutMessage = currentUser => {
	document.querySelector('#logout-message').innerText = 
		currentUser ? `Ready to log ${currentUser.username} out.` : '';
};

const logoutUser = async e => {
	e.preventDefault();

	//console.log("in logoutUser");

	const query = `mutation {
	   logout { wasSuccessful }
	 }`;

	 const retStat = await makeRequest('/api/graphql', {
		headers: {'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify({query})
	 });

        const { data, errors } = retStat;

	//console.log("data.logout.wasSuccessful = ", data.logout.wasSuccessful);

	if(!data.logout.wasSuccessful)
		alert('Fail to logout');
	else
	{
		//alert('User is now logout');
		clearLogoutMessage();
	}
}

const clearLogoutMessage = () => {
    document.querySelector('#logout-message').innerText = '';
} 