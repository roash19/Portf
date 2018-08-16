import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';

const OneLab = (props) => {
  const {image, title, text, id} = props;
  return (
    <div className={styles.oneLab}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={title}/>
      </div>

      <div className={styles.info}>
        <p className={styles.titleLab}>{title}</p>
        <p className={styles.text}>{text}</p>

        <Link className={styles.link} to={`/labs/${id}`}>check now &raquo;</Link>
      </div>

    </div>
  );
};

export default OneLab;
