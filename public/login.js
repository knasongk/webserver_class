
window.onload = function() {
   
    document.getElementById('loginForm').addEventListener('submit', loginUser);
	document.getElementById('cancelLogin').addEventListener('click', cancelLogin);
    document.getElementById('request_password_reset').addEventListener('click', requestPasswordReset);

	getCurrentLoginUser();
};

const getCurrentLoginUser = async e => {
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
        setCurrentLoginUser(data.currentUser); 
    }
}


const loginUser = async e => {
	e.preventDefault();

	console.log("in loginUser");

	const userCredential = {
	  username: document.querySelector('#login-username').value,
	  password: document.querySelector('#login-password').value,
	};

	//console.log("userCredential.username = ", userCredential.username);
	//console.log("userCredential.password = ", userCredential.password);

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
		 setCurrentLoginUser(data.login);
		return;
         }

	  //console.log("data.login.username = ", data.login.username);
	  //console.log("data.login.displayName = ", data.login.displayName);

      setCurrentLoginUser(data.login);
	  //alert('User ' + data.login.username + ' has log into the travel service');
};

const requestPasswordReset = async e => {
	e.preventDefault();
	//console.log("in requestPasswordReset");


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

const cancelLogin = async e => {
	e.preventDefault();
	document.querySelector('#loginForm').reset();
}

const setCurrentLoginUser = currentUser => {
	document.querySelector('#welcome-message-login').innerText = 
		currentUser ? `Welcome ${currentUser.username} to Travel Unscripted` : '';
};