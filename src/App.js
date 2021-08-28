import Navbar from './components/Navbar';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Menu from './pages/Manu';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/About" exact component={About}></Route>
				<Route path="/menu" component={Menu} />
			</Switch>
		</>
	);
}

export default App;
