import React, {Component} from 'react';
import '../sass/header.scss';
class Header extends Component {
  render() {
    return (
        <header className="Header">
          <div className="container-logo">
            <img className="img-logo" src="#" />
            <p className="reference-logo">
              <h1 className="title">Business Intelligence</h1>
              <h3 className="subtitle">AGENCIA DE SOLUCIONES TECNOLOGICAS</h3>
            </p>
          </div>
          <div className="primary-menu">
            <nav>
              <li>Inicio</li>
              <li>Servicios</li>
              <li>Portafolio</li>
              <li>Nosotros</li>
              <li>Contacto</li>
              <li><img src="/comercio-y-compras.svg" alt=""/></li>
            </nav>
          </div>
        </header>
    );
  }
}

class Home extends Component {
  render() {
    return (
        <section>
          <Header/>
        </section>
    );
  }
}

export default Home;