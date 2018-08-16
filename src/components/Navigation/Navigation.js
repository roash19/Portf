import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './style.css';

import avatar from '../../images/avatar.png';

class Navigation extends Component {
  render() {
    return (
        <div className={styles.nav}>
          <div className={styles.avatarWrapper}>
            <img className={styles.avatar} src={avatar} alt="avatar"/>
          </div>

          <ul className={styles.navList}>
            <NavLink exact to="/" className={styles.navItem} activeClassName={styles.active}>About</NavLink>
            <NavLink exact to='/work' className={styles.navItem} activeClassName={styles.active}>Work</NavLink>
            <NavLink exact to="/labs" className={styles.navItem} activeClassName={styles.active}>Labs</NavLink>
            <NavLink exact to="/contact" className={styles.navItem} activeClassName={styles.active}>Contact</NavLink>
          </ul>

          <div className={styles.social}>
            <a href=""><i className="fab fa-behance"></i></a>
            <a href=""><i className="fas fa-basketball-ball"></i></a>
            <a href=""><i className="fab fa-twitter"></i></a>
            <a href=""><i className="fab fa-github"></i></a>
          </div>
        </div>
    )
  }
}

export default Navigation;