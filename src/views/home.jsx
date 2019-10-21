import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
        <header>
          <div className="container-logo">
            <img className="img-logo" src="#" />
            <p className="reference-logo">
              <h1 className="title">Business Intelligence</h1>
              <h3 className="subtitle">AGENCIA DE SOLUCIONES TECNOLOGICAS</h3>
            </p>
          </div>
          <div>
            <nav>
              <li>Inicio</li>
              <li>Servicios</li>
              <li>Portafolio</li>
              <li>Nosotros</li>
              <li>Contacto</li>
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