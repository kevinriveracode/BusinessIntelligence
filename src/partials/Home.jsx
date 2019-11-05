import React , {Component} from 'react'
import '../sass/header.scss';
import ButtonBI from '../components/button';
import { Link } from 'react-router-dom';
class Header extends Component {
  stickyMenu = () => {
    let header = document.getElementById('HeaderNav');
    let sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add('HeaderPosition');
    } else {
      header.classList.remove('HeaderPosition');
    }
  };
  render() {
    window.onscroll = () => {
      this.stickyMenu();
    };
    return (
        <header id="HeaderNav" className="Header">
          <div className="container-logo">
            <p className="reference-logo">
              <h1 className="title">Business Intelligence</h1>
              <h3 className="subtitle">AGENCIA DE SOLUCIONES TECNOLOGICAS</h3>
            </p>
          </div>
          <div className="primary-menu">
            <nav>
              <li><Link to="/" >Inicio</Link></li>
              <li><Link to="/service/ecommerce">Servicios</Link></li>
              <li><Link to="/service/web">Diseño web</Link></li>
              <li>Nosotros</li>
              <li>Blog</li>
              <li>Contacto</li>
            </nav>
          </div>
          <div className="app-menu">
            <nav>
              <ButtonBI/>
            </nav>
          </div>
        </header>
    );
  }
}
export default Header