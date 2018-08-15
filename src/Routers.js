import React, {Component} from 'react';
import styles from './index.css';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Labs from "./components/Labs/Labs";

class Routers extends Component {
  render() {
    return (
      <Router>
        <div className={styles.container}>
          <Navigation/>

          <div className={styles.main}>
            <Switch>
              <Route exact path="/" component={About}/>
              <Route path="/work" component={Work}/>
              <Route path="/labs" component={Labs}/>
              <Route path="/contact" component={Contact}/>
              <Redirect to="/"/>
            </Switch>
          </div>

        </div>
      </Router>
    )
  }
}

export default Routers;