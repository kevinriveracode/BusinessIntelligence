import React, {Component} from 'react';
import '../sass/why.scss';

class Why extends Component {
  render() {
    return (
        <section className="Why">
          <div className="why-container-image">
            <img src="/digital.png" alt=""/>
          </div>
          <div className="why-container-text">
            <h1>El mundo se vuelve cada vez más digital</h1>
            <h3>Porqué mi negocio necesita una página web y una correcta
              imagen de marca.</h3>
            <p>¿Aun no estas en internet?</p>
            <h3><b>Algunas razones por las que deberias estar en internet son:</b></h3>
            <ul className={"no-list"}>
              <li><p>Alcance mundial</p></li>
              <li><p>Posibilidad de competir con las grandes empresas</p></li>
              <li><p>Generación de contactos y oportunidades de negocio</p></li>
              <li><p>Obtener clientes potenciales</p></li>
            </ul>
          </div>
        </section>
    );
  }

}

export default Why;