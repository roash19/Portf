import React from 'react';
import styles from './style.css';

const OneWork = (props) => {
  return (
    <div className={styles.oneWork}>
      <div className={styles.work}>
        <img src={props.image} alt=""/>
      </div>
      <p className={styles.workName}>{props.name}</p>
    </div>
  );
};

export default OneWork;
