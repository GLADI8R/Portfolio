// import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navigation/Nav';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
