import React, {Component} from 'react';
import styles from './style.css';
import works from '../../data/works';
import OneWork from './OneWork';

class Work extends Component {
  state = {
    works: works,
    filtered: [],
    value: '',
    showInput: false
  };

  renderWorks = () => {
    const {filtered, works, value} = this.state;

    if (filtered.length > 0) {
      return filtered.map(item => <OneWork key={item.id} image={item.image} name={item.text}/>);
    } else if (filtered.length === 0 && value === '') {
      return works.map(item => <OneWork key={item.id} image={item.image} name={item.text}/>);
    } else {
      return <p className={styles.notFounded}>Not Founded</p>
    }

  };

  handleChange = (event) => {
    const value = event.target.value;

    const filtered = this.state.works.filter(item =>
      item.text.toLowerCase().indexOf(value.toLowerCase()) > -1);

    this.setState({
      value,
      filtered
    })
  };

  toggleSearch = () => {
    this.setState({
      showInput: !this.state.showInput
    })
  };

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
            <button className={styles.search} onClick={this.toggleSearch}></button>
            {
              this.state.showInput &&
              <input type="text"
                     autoFocus="true"
                     className={styles.input}
                     onChange={this.handleChange}
                     value={this.state.value}/>
            }
          </div>
        </header>

        <div className={styles.works}>
          {this.renderWorks()}
        </div>

      </div>
    )
  }
}


export default Work;