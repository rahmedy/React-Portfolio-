import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Contact from './components/pages/ContactPage/Contact';
import Work from './components/pages/WorkPage/Work';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/"  component={Home} />
				<Route exact path="/work"  component={Work} />
				<Route exact path="/contact" component={Contact} />
			</Switch>
		</Router>
	);
}

export default App;
