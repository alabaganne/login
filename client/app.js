function handleLogin(e) {
	e.preventDefault();
	
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	
	axios({
		method: 'POST',
		url: 'http://127.0.0.1:3000/api/login',
		data: {
			email: email,
			password: password
		}
	}).then(function(res) {
		console.log(res);
	}).catch(function(err) {
		console.log(err);
	})
}