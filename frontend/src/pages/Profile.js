import axios from 'axios';
import { constants } from '../Constants';
import ProfileForm from '../forms/ProfileForm';

function Profile() {
	const user = JSON.parse(localStorage.getItem('user'));
	const submit = (data, reset) => {
		axios
			.post(`${constants.API_URL}/profile`, data)
			.then((response) => {
				reset();
				alert('Profile updated');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<ProfileForm submit={submit} data={user} />
		</div>
	);
}

export default Profile;
