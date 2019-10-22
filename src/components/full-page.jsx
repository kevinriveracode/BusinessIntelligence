import React, {Component} from 'react';
import '../sass/full-page.scss';

class FullPage extends Component {
  render() {
    return (
        <section className="FullPage">
          <div className="target-info">
            <h1>Agencia de Transformación Digital</h1>
            <h3>Diseñamos y desarrollamos soluciones digitales para empresas líderes.<br/>
            Nos enfocamos en ayudar a nuestros clientes a lograr una transformación digital exitosa de su negocio a través de productos y experiencias
            digitales innovadoras y de alto impacto. </h3>
          </div>
          <div className="target-image">
            <img src="/fullpage.png" alt=""/>
          </div>
        </section>
    );
  }
}

export default FullPage;