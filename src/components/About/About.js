import React, {Component} from 'react';
import styles from './style.css';

import logo from '../../images/logo.png';

class About extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>About</h1>
        <div className={styles.border}></div>

        <img className={styles.logo} src={logo} alt=""/>

        <h2 className={styles.subtitle}>Freelance Product Designer</h2>

        <p className={styles.text}>
          Currently curating designs for new
          startups and founders. Also love
          to code in <span>Laravel</span> and <span>Ruby</span>
        </p>

        <div className={styles.buttonsWrapper}>
          <button className={styles.button}>Hire me</button>
          <button className={styles.button}>Know more</button>
        </div>
      </div>
    )
  }
}

export default About;