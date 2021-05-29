import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navigation/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/project"><Project /></Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
