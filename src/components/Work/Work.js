import React, {Component} from 'react';
import styles from './style.css';
import works from '../../data/works';
import OneWork from './OneWork';

class Work extends Component {
  render() {
    return (
      <div className={styles.container}>
        <header  className={styles.header}>
          <div>
            <h1 className={styles.title}>Work</h1>
            <div className={styles.border}></div>
          </div>

          <div className={styles.alignCenter}>
            <button className={styles.share}></button>
            <button className={styles.search}></button>
          </div>
        </header>

        <div className={styles.works}>
          {renderWorks()}
        </div>

      </div>
    )
  }
}

const renderWorks = () => {
  const workList = works.map(item => <OneWork key={item.id} image={item.image} name={item.text}/>)
  return workList;
};

export default Work;