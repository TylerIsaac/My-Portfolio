import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './home/Home';
import Projects from './projects/Projects';
import NotFound from './NotFound';
import Contact from './contact/Contact';
import About from './about/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
