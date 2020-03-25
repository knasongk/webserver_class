
window.onload = function() {
   
    document.getElementById('resetPasswordForm').addEventListener('submit', resetPassword);
    document.getElementById('cancelReset').addEventListener('click', cancelReset);
    getCurrentResetPasswordUser();
};

const getCurrentResetPasswordUser = async e => {
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
        setCurrentResetPasswordUser(data.currentUser); 
    }
}

const setCurrentResetPasswordUser = currentUser => {
	document.querySelector('#reset-message').innerText = 
		currentUser ? `About to reset ${currentUser.username} password` : '';
};

const resetPassword = async e => {
    e.preventDefault();
//console.log("in resetPassword");

    const resetInput = {
       username: document.querySelector('#reset-username').value,
       password: document.querySelector('#reset-password').value,
       key: document.querySelector('#reset-key').value
    };

    const query = `mutation ($resetInput: PasswordResetInput!) {
                   resetPassword(resetInput: $resetInput) {
                     displayName
                     username
                   }
                  }`;

 variables = {resetInput};

 const user = await makeRequest('/api/graphql', {
    headers: {'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({query, variables})
 });

     const { data, errors } = user;

 /* check for errors */
 if(errors) {
   const err = errors.find(({path}) => path.includes('resetPassword'));
   if (err && !data.resetPassword){
         //alert("fail to reset password for user " + resetInput.username + " reason: " +  err.message);

         // alert failure without the reason.
         alert("fail to reset password for user " + resetInput.username);

    return;
        }
      }

  //console.log("data.resetPassword.username = ", data.resetPassword.username);
  //console.log("data.resetPassword.displayName = ", data.resetPassword.displayName);

  setResetMsg(data.resetPassword);
  //alert('Successfully reset the password for User ' + data.resetPassword.username);
}

const cancelReset = async e => {
	e.preventDefault();
	document.querySelector('#resetPasswordForm').reset();
}

const setResetMsg = currentUser => {
	document.querySelector('#reset-message').innerText = 
		currentUser ? `Password for ${currentUser.username} has been reset.` : '';
};