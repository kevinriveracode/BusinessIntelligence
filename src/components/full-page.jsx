import React, {Component} from 'react';
import '../sass/full-page.scss';
import ButtonBI from './button';

class FullPage extends Component {
  render() {
    return (
        <section className="FullPage">
          <div className="target-info">
            <h2>Diseño web y marketing online</h2>
            <h1>Tu lo imaginas, nosotros lo creamos</h1>
            <ButtonBI/>
          </div>
          <div className="target-image">
            <img src="/fullpage.png" alt=""/>
          </div>
        </section>
    );
  }
}

export default FullPage;