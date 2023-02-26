import { useState } from 'react';
import axios from 'axios';
import { constants } from '../Constants';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
	const navigate = useNavigate();
	let [id, setId] = useState();
	let [password, setPassword] = useState();

	function submit(e) {
		e.preventDefault();
		const data = { id: id, password: password };
		axios
			.post(`${constants.API_URL}/login`, data)
			.then((response) => {
				setId('');
				setPassword('');
				alert('Login successful');
				localStorage.setItem('user', JSON.stringify(response.data));
				navigate('/dashboard');
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className='container'>
			<h2>Login</h2>
			<hr />
			<form onSubmit={submit}>
				<div className='form-group'>
					<label for='profile_email'>Email address</label>
					<input
						type='number'
						className='form-control'
						id='profile_id'
						placeholder='3332'
						name='id'
						onChange={(e) => setId(e.target.value)}
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
				<div>
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
