import './App.css';

import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx'

import {
  BrowserRouter as Router, // alias BrowserRouter as Router
  Route,
  Link
} from 'react-router-dom'

function App() { 
  return (
    <div className="App">
      <h3>dental health day @ the dental spa 🦷</h3>

      <Router>
        {/* all routes are defined in the router */}
        <Route exact path="/" component={Home} />

        <Route path="/contact" component={Contact} />

        <Route path="/services" component={Services} />
      </Router>

      <h4>example footer 🦶</h4>
    </div>
  );
}

export default App;
