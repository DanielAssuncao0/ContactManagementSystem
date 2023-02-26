import { Link } from 'react-router-dom';

function Menu() {
	return (
		<div className='menu container'>
			<ul class='nav nav-pills'>
				<li class='nav-item'>
					<Link to='/' class='nav-link active'>
						Dashboard
					</Link>
				</li>
				<li class='nav-item'>
					<Link to='/login' class='nav-link'>
						Login
					</Link>
				</li>
				<li class='nav-item'>
					<Link to='/register' class='nav-link'>
						Register
					</Link>
				</li>
				<li class='nav-item'>
					<Link to='/profile' class='nav-link'>
						Profile
					</Link>
				</li>
				<li class='nav-item'>
					<Link to='/contacts' class='nav-link'>
						Contacts
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
