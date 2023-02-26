import axios from 'axios';
import { constants } from '../Constants';
import ProfileForm from '../forms/ProfileForm';

function Register() {
	const submit = (data, reset) => {
		console.log(data);
		console.log(reset);
		axios
			.post(`${constants.API_URL}/profile`, data)
			.then((response) => {
				reset();
				alert('Profile created');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<ProfileForm submit={submit} />
		</div>
	);
}

export default Register;
