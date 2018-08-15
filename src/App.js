import React, { Component } from 'react';
import styles from './index.css';
import Routers from "./Routers";

class App extends Component {
  render() {
    return (
      <div className={styles.allcontent}>
        <Routers/>
      </div>
    );
  }
}

export default App;
