import axios from 'axios';
import { constants } from '../Constants';
import ProfileForm from '../forms/ProfileForm';
import { useNavigate } from 'react-router-dom';

function Register() {
	const navigate = useNavigate();

	const submit = (data, reset) => {
		console.log(data);
		console.log(reset);
		axios
			.post(`${constants.API_URL}/profile`, data)
			.then((response) => {
				reset();
				alert('Profile created');
				navigate('/login');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='container'>
			<h2>Register</h2>
			<hr />
			<ProfileForm submit={submit} />
		</div>
	);
}

export default Register;
