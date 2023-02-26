import { useState } from 'react';

function ProfileForm(props) {
	let [name, setName] = useState();
	let [phone, setPhone] = useState();
	let [dob, setDob] = useState();
	let [password, setPassword] = useState();

	const reset = () => {
		setName('');
		setPhone('');
		setDob('');
		setPassword('');
	};

	const submit = (e) => {
		e.preventDefault();
		const data = { name: name, phone: phone, dob: dob, password: password };
		props.submit(data, reset);
	};

	return (
		<div className='App'>
			<form onSubmit={submit}>
				<input
					type='email'
					placeholder='Email'
					name='email'
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					name='password'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Phone'
					name='phone'
					onChange={(e) => setPhone(e.target.value)}
				/>
				<input
					type='date'
					placeholder='Date of birth'
					name='dob'
					onChange={(e) => setDob(e.target.value)}
				/>
				<button type='submit'>Submit</button>
				<button>
					<a href='register'>Login</a>
				</button>
			</form>
		</div>
	);
}

export default ProfileForm;
