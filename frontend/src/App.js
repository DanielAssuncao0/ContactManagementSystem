import { Outlet } from 'react-router-dom';
import Menu from './Menu';

function App() {
	return (
		<div>
			<Menu />
			<br />
			<Outlet />
		</div>
	);
}

export default App;
