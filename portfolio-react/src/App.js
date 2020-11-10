import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home'
import Contact from './components/pages/ContactPage/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
