import React, {Component} from 'react';
import styles from './index.css';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import MenuNav from './components/Navigation/MenuNav';
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Labs from "./components/Labs/Labs";
import Lab from "./components/Labs/Lab";

class Routers extends Component {
  render() {
    return (
      <Router>
        <div className={styles.outerContainer} id="outer-container">
          <MenuNav/>

          <div className={styles.main} id="page-wrap">
            <Switch>
              <Route exact path="/" component={About}/>
              <Route exact path="/work" component={Work}/>
              <Route exact path="/labs" component={Labs}/>
              <Route exact path="/contact" component={Contact}/>
              <Route path="/labs/:id" component={Lab}/>
              <Redirect to="/"/>
            </Switch>
          </div>

        </div>
      </Router>
    )
  }
}

export default Routers;