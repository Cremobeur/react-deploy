import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Work from './components/Work';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Hero}/>
          <Route exact path="/Skill" component={Skill}/>
          <Route exact path="/Work" component={Work}/>
        </Switch>

        <Footer />
      </Router>
  );
}

export default App;
