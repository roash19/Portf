import React from 'react';
import styles from './style.css';

const OneLab = (props) => {
  const {image, title, text} = props;
  return (
    <div className={styles.oneLab}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={title}/>
      </div>

      <div className={styles.info}>
        <p className={styles.titleLab}>{title}</p>
        <p className={styles.text}>{text}</p>

        <a className={styles.link} href="">check now &raquo;</a>
      </div>

    </div>
  );
};

export default OneLab;
