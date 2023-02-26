function Login() {
	function submitLogin(e) {
		e.preventDefault();
	}

	return (
		<div className='App'>
			<form>
				<input type='text' placeholder='Email' />
				<input type='password' placeholder='Password' />
				<button type='submit' onSubmit={submitLogin}>
					Login
				</button>
				<button>
					<a href='register'>Register</a>
				</button>
			</form>
		</div>
	);
}

export default Login;
