import './App.css';

import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx'
import Header from './components/Header'

import {
  BrowserRouter as Router, // alias BrowserRouter as Router
  Route,
} from 'react-router-dom'

function App() { 
  const dentalServices = [
    "Deep Cleaning",
    "Filling",
    "Gum Massage",
    "Root Canal",
    "Oral Mud Bath"
  ]


  return (
    <div className="App">
      <h3>dental health day @ the dental spa 🦷</h3>

      <Router>
        <Header />

        {/* all routes are defined in the router */}
        <Route exact path="/" component={Home} />

        <Route path="/contact" component={Contact} />

        <Route 
          path="/services" 
          render={() => <Services dentalServices={dentalServices} />}
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
