import axios from 'axios';
import { constants } from '../Constants';
import ProfileForm from '../forms/ProfileForm';

function Profile() {
	const user = JSON.parse(localStorage.getItem('user'));
	const submit = (data, reset) => {
		axios
			.put(`${constants.API_URL}/profile/${user._id}`, data)
			.then((response) => {
				reset();
				alert('Profile updated');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='container'>
			<h2>Update profile</h2>
			<hr />
			<ProfileForm submit={submit} data={user} />
		</div>
	);
}

export default Profile;
