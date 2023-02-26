import { Link } from 'react-router-dom';

function Dashboard() {
	const user = JSON.parse(localStorage.getItem('user'));
	return (
		<div className='container'>
			<h2>Dashboard</h2>
			<hr />
			<div>
				<p>Name: {user.name}</p>
				<p>Email: {user.email}</p>
				<p>Phone: {user.phone}</p>
				<p>Dob: {user.dob}</p>
				<div>
					<Link to='/contact'>See contacts ({user.contacts.length})</Link>
				</div>
			</div>
			<hr />
			<Link to='profile'>Update profile</Link>
		</div>
	);
}

export default Dashboard;
