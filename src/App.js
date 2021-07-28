import './App.css';
import Header from './home/Header';
import Nav from './Nav';
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Header />
      </Router>
    </div>
  );
}

export default App;
