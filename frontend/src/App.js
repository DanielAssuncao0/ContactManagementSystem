import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Login from './Login';
import Register from './Register';

function App() {
	return (
		<div className='App'>
			<Login />
			<Register />
			<Menu />
		</div>
	);
}

export default App;
