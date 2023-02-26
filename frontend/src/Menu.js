import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Menu() {
	const navigate = useNavigate();

	function logout() {
		sessionStorage.removeItem('user');
		alert('Logout successful');
		navigate('/login');
	}

	return (
		<div className='menu container'>
			<ul className='nav nav-pills'>
				<li className='nav-item'>
					<Link to='/' className='nav-link active'>
						Dashboard
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/login' className='nav-link'>
						Login
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/register' className='nav-link'>
						Register
					</Link>
				</li>
				<li className='nav-item'>
					<a onClick={logout} className='nav-link'>
						Logout
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
