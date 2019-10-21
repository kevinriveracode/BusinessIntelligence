import React , {Component} from 'react'
import '../sass/header.scss';
class Header extends Component {
  render() {
    return (
        <header className="Header">
          <div className="container-logo">
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
              <li>Blog</li>
              <li>Contacto</li>
            </nav>
          </div>
          <div className="app-menu">
            <nav>
              {/*Aqui se pondra el acceso a backoffice, al checkout de compra*/}
            </nav>
          </div>
        </header>
    );
  }
}
export default Header