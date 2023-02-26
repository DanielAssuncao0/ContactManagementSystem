import axios from 'axios';
import { constants } from './Constants';
import ProfileForm from './ProfileForm';

function Register() {
	const submit = (data, reset) => {
		console.log(data);
		axios
			.post(`${constants.API_URL}/profile`, data)
			.then((response) => {
				reset();
				alert('Profile created');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='App'>
			<ProfileForm submit={submit} />
		</div>
	);
}

export default Register;
