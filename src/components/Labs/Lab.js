import React, {Component} from 'react';
import styles from '../../index.css';
import labs from '../../data/labs';

class Lab extends Component {
  render() {
    const lab = labs.filter(item => item.id === +this.props.match.params.id);
    return (
      <div className={styles.container}>
        <h1 style={{color: 'white', fontSize: '30px', marginBottom: '80px'}}>Section {lab[0].title}</h1>
        <img style={{width: '500px', height: 'auto', minHeight: '220px', marginBottom: '30px'}} src={lab[0].image} alt=""/>

        <p style={{color: 'white', fontSize: '20px', marginBottom: '15px'}}>{lab[0].text}</p>
        <p style={{color: 'white', fontSize: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias animi aperiam asperiores aut consectetur consequuntur corporis cum,
        deserunt ea eos eum ipsum libero molestias nemo odio odit omnis porro quos
        repellendus repudiandae similique sunt tempore totam, ut veritatis! Accusamus
        autem debitis deleniti dolorum ducimus enim est eveniet excepturi facilis fuga
        illum iusto labore maiores minus modi molestiae nam natus nobis nostrum, numquam
        provident quaerat quidem quisquam quo quod rem repellendus repudiandae saepe
        similique tempora ullam voluptas voluptatem voluptates. Accusamus aspernatur blanditiis,
        delectus eos eum harum itaque iure neque nihil, quaerat reiciendis rem, totam. Alias
        cupiditate debitis dolorem, ipsam nemo voluptate.
        </p>
      </div>
    )
  }
}

export default Lab;