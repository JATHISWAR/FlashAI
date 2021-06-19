import './App.css';
import Header from './Header';
import FlashCards from './FlashCards';
import SwipeButtons from './SwipeButtons';
import About from './About';
import PaperPattern from './PaperPattern';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
    <Header/>
      <Switch>
      <Route path="/paper_pattern">
        <PaperPattern/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/">
      <FlashCards/>
      <SwipeButtons/>
      </Route>
      </Switch>
    </div>
    </Router>




  );
}

export default App;
