
window.onload = function() {
    
    document.getElementById('signupForm').addEventListener('submit', signupUser);
    document.getElementById('cancelSignup').addEventListener('click', cancelSignup);
    getCurrentSignupUser();
};

const getCurrentSignupUser = async e => {
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
        setCurrentSignupUser(data.currentUser); 
    }
}


const signupUser = async e => {
	e.preventDefault();

	console.log("in signupUser");

	const user = {
	  displayName: document.querySelector('#display_name').value,
	  email: document.querySelector('#email_address').value,
	  username: document.querySelector('#signup-username').value,
	  password: document.querySelector('#signup-password').value,
	};

	//console.log("user.displayName = ", user.displayName);
	//console.log("user.email = ", user.email);
	//console.log("user.username = ", user.username);
	//console.log("user.password = ", user.password);

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

	  //console.log("data.signup.username = ", data.signup.username);
	  //console.log("data.signup.displayName = ", data.signup.displayName);

	  setCurrentSignupUser(data.signup);
	  //alert('User ' + data.signup.username + ' has signed up for the travel service');
};

const cancelSignup = async e => {
	e.preventDefault();
	document.querySelector('#signupForm').reset();
}

const setCurrentSignupUser = currentUser => {
	document.querySelector('#welcome-message-signup').innerText = 
		currentUser ? `Welcome ${currentUser.username} to Travel Unscripted` : '';
};