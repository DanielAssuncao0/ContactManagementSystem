import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProfileForm(props) {
	let [name, setName] = useState();
	let [email, setEmail] = useState();
	let [phone, setPhone] = useState();
	let [dob, setDob] = useState();
	let [password, setPassword] = useState();

	if (props.data) {
		setEmail(props.data.email);
		setName(props.data.name);
		setPhone(props.data.phone);
		setDob(props.data.dob);
		setPassword(props.data.password);
	}

	const reset = () => {
		setEmail('');
		setName('');
		setPhone('');
		setDob('');
		setPassword('');
	};

	const submit = (e) => {
		e.preventDefault();
		const data = { email: email, name: name, phone: phone, dob: dob, password: password };
		props.submit(data, reset);
	};

	return (
		<div className='container'>
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
				<div className='form-group'>
					<label for='profile_name'>Name</label>
					<input
						type='text'
						className='form-control'
						id='profile_name'
						placeholder='example'
						name='name'
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<label for='profile_phone'>Phone number</label>
					<input
						type='text'
						placeholder='Phone'
						name='phone'
						className='form-control'
						id='profile_phone'
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<label for='profile_dob'>Date of birth</label>
					<input
						type='date'
						name='dob'
						className='form-control'
						id='profile_dob'
						onChange={(e) => setDob(e.target.value)}
					/>
				</div>
				<div>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
					<button className='btn'>
						<Link to='/login' className='nav-link'>
							Login
						</Link>
					</button>
				</div>
			</form>
		</div>
	);
}

export default ProfileForm;
