import axios from 'axios';
import { constants } from '../Constants';
import { useState } from 'react';

function Contact() {
	let [name, setName] = useState();
	let [phone, setPhone] = useState();

	const reset = () => {
		setName('');
		setPhone('');
	};

	const user = JSON.parse(localStorage.getItem('user'));

	function remove(index) {
		axios
			.delete(`${constants.API_URL}/contact/${user._id}/${index}`)
			.then((response) => {
				alert('Contact deleted');
				user.contacts.slice(index, 1);
				localStorage.setItem('user', JSON.stringify(user));
				reset();
			})
			.catch((err) => console.log(err));
	}

	const add = (e) => {
		e.preventDefault();
		const data = { name: name, phone: phone };
		axios
			.post(`${constants.API_URL}/contact/${user._id}`, data)
			.then((response) => {
				alert('Contact added');
				if (response.upsertedCount > 0) {
					user.contacts.push(data);
					localStorage.setItem('user', JSON.stringify(user));
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='container'>
			<h2>Contacts</h2>
			<hr />
			<form onSubmit={add}>
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
				<div>
					<button type='submit' className='btn btn-primary'>
						Add
					</button>
				</div>
			</form>
			<hr />
			<table className='table'>
				<thead>
					<th>Name</th>
					<th>Phone</th>
				</thead>
				<tbody>
					{user.contacts.map((value, index) => (
						<tr>
							<td>{value.name}</td>
							<td>{value.phone}</td>
							<td>
								<button className='btn btn-danger' onClick={() => remove(index)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Contact;
