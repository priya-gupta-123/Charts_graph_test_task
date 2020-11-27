import Index from "./components/index"
import CollegeDetails from "./components/CollegeDetails"
import  {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
// import  "./server/index"


import "./assets/bootstrap.min.css";
import "./assets/style.css";


function App() {
  return (
    <div className="App">
       <Router>
                <Switch >
                  <Route path="/" exact component={Index} />:
                  <Route path="/College-details"  component={CollegeDetails} />
                </Switch>
        </Router>
    </div>
  );
}

export default App;
