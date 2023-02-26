import axios from 'axios';
import { useState } from 'react';
import { constants } from './Constants';

function Register() {
	let [name, setName] = useState();
	let [phone, setPhone] = useState();
	let [dob, setDob] = useState();
	let [password, setPassword] = useState();

	function submit(e) {
		e.preventDefault();
		const data = { name: name, phone: phone, dob: dob, password: password };
		axios
			.post(`${constants.API_URL}/profile`, data)
			.then((response) => {
				setName('');
				setPhone('');
				setDob('');
				setPassword('');
				alert('Profile created');
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className='App'>
			<form onSubmit={submit}>
				<input type='text' placeholder='Email' />
				<input type='password' placeholder='Password' />
				<input type='text' placeholder='Phone' />
				<input type='date' placeholder='Date of birth' />
				<button type='submit'>Submit</button>
				<button>
					<a href='register'>Login</a>
				</button>
			</form>
		</div>
	);
}

export default Register;
