import './App.css';
import { useState } from 'react'

import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx'
import Header from './components/Header'
import serviceDetails from './data/serviceDetails'
import Service from './components/Service'

import {
  BrowserRouter as Router, // alias BrowserRouter as Router
  Route,
  Switch
} from 'react-router-dom'

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

        <Switch>
          {/* all routes are defined in the router */}
          <Route exact path="/" component={Home} />

          <Route path="/contact" component={Contact} />

          <Route 
            exact path="/services" 
            render={() => <Services dentalServices={dentalServices} />}
          />

          <Route 
            path="/services/:id"
            render={props => {
              console.log(props.match.params.id)
              const service = dentalServices.find(service => service.id.toString() === props.match.params.id )
              props = {...props, ...service}
              return <Service  {...props} /> 
            }}
          />

          {/* example of how route params work */}
          <Route 
            path="/resource/:id/otherResource/:otherId"
            render={props => {
              // whatever code we define here is run
              console.log(props.match.params)

              // whatever gets returned is rendered
              return 
            }}
          
          />

          <Route 
            path="/add/:x/:y"
            render={props => {
              const x = parseInt(props.match.params.x)
              const y = parseInt(props.match.params.y)

              return <h1>the value {x} + {y} = {x + y}</h1>

            }}
          />

          <Route 
            path="*"
            render={() => <h1>404 page not found 🕵️‍♀️</h1>}
          />
        </Switch>
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
