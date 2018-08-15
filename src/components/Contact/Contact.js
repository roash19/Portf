import React, {Component} from 'react';
import styles from './style.css';

class Contact extends Component {
  state = {
    textarea: '',
    name: '',
    email: '',
    company: '',
    position: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  };

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.border}></div>

        <form className={styles.form}>
          <p className={styles.label}>Project brief description</p>
          <textarea className={styles.textarea}
                    name="textarea"
                    placeholder="Project Type, Target customer, timeline, estimate etc"
                    value={this.state.textarea}
                    onChange={this.handleChange}/>

          <p className={styles.label}>About You</p>

          <div className={styles.inputsWraper}>
            <input className={styles.input}
                   type="text"
                   name="name"
                   placeholder="Full Name"
                   value={this.state.name}
                   onChange={this.handleChange}/>
            <input className={styles.input}
                   type="text"
                   name="email"
                   placeholder="Email Address"
                   value={this.state.email}
                   onChange={this.handleChange}/>
            <input className={styles.input}
                   type="text"
                   name="company"
                   placeholder="Company Name"
                   value={this.state.company}
                   onChange={this.handleChange}/>
            <input className={styles.input}
                   type="text"
                   name="position"
                   placeholder="Position"
                   value={this.state.position}
                   onChange={this.handleChange}/>
          </div>

          <button className={styles.submit}>Request a Quote</button>
        </form>
      </div>
    )
  }
}

export default Contact;