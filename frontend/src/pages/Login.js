import { useState } from 'react';
import axios from 'axios';
import { constants } from '../Constants';
import { Link } from 'react-router-dom';

function Login() {
	let [email, setEmail] = useState();
	let [password, setPassword] = useState();

	function submit(e) {
		e.preventDefault();
		const data = { email: email, password: password };
		axios
			.post(`${constants.API_URL}/login`, data)
			.then((response) => {
				setEmail('');
				setPassword('');
				alert('Login successful');
				//STORE user ID
				//Redirect to dashboard
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className='container'>
			<h2>Login</h2>
			<form onSubmit={submit}>
				<div className='form-group'>
					<label for='profile_email'>Email address</label>
					<input
						type='email'
						className='form-control'
						id='profile_email'
						placeholder='name@example.com'
						name='email'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<label for='profile_password'>Password</label>
					<input
						type='password'
						placeholder='Password'
						name='password'
						className='form-control'
						id='profile_password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='flex justify-between'>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
					<button className='btn'>
						<Link to='/register' className='nav-link'>
							Register
						</Link>
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
