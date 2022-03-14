import './App.css';
import { useState } from 'react'

import Home from './components/pages/Home.jsx'
import Contact from './components/pages/Contact.jsx'
import Services from './components/pages/Services.jsx'
import Header from './components/layout/Header'
import serviceDetails from './data/serviceDetails'
import Service from './components/pages/Service.jsx'

import {
  BrowserRouter as Router, // alias BrowserRouter as Router
  Route,
  Routes
} from 'react-router-dom'
import Add from './components/pages/Add';
import NotFound from './components/pages/NotFound';
import Example from './components/pages/Example';

function App() { 
  const [dentalServices] = useState(serviceDetails)
  // const dentalServices = [
  //   "Deep Cleaning",
  //   "Filling",
  //   "Gum Massage",
  //   "Root Canal",
  //   "Oral Mud Bath"
  // ]

  return (
    <div className="App">
      <h3>dental health day @ the dental spa 🦷</h3>

      <Router>
        <Header />

        <Routes>
          {/* all routes are defined in the router */}
          <Route 
            exact path="/" 
            element={<Home />} 
          />

          <Route 
            path="/contact" 
            element={<Contact />} 
          />

          <Route 
            exact path="/services" 
            element={<Services dentalServices={dentalServices} />}
          />

          <Route 
            path="/services/:id"
            element={<Service services={dentalServices} />}
          />

          {/* example of how route params work */}
          <Route 
            path="/resource/:id/otherResource/:otherId"
            element={<Example />}
          
          />

          <Route 
            path="/add/:x/:y"
            element={<Add />}
          />

          <Route 
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Router>

      <h4>example footer 🦶</h4>
    </div>
  );
}


export default App;

// example of express route params
// app.get('/resource/:banana', (req, res) => {
//   routeParams = req.params.banana
// })
