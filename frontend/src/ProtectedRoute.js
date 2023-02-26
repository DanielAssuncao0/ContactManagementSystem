import { Outlet, useNavigate } from 'react-router-dom';
import Menu from './Menu';

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('user'));
	if (!user?._id) {
		return navigate('/login');
	}
	return (
		<div>
			<Menu />
			<hr />
			{children ? children : <Outlet />};
		</div>
	);
};

export default ProtectedRoute;
