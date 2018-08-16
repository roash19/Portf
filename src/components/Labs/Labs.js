import React, {Component} from 'react';
import styles from './style.css';
import OneLab from './OneLab';
import labs from '../../data/labs';

class Labs extends Component {
  renderLabs = () => {
    const labsList = labs.map(item => <OneLab key={item.id} image={item.image} title={item.title} text={item.text} id={item.id}/>)
    return labsList
  };

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Labs</h1>
        <div className={styles.border}></div>

        <div className={styles.labs}>
          {this.renderLabs()}
        </div>
      </div>
    )
  }
}

export default Labs;