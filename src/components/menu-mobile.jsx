import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import '../sass/menu-mobile.scss'
import $ from 'jquery';
class MenuMobile extends Component{
  hideMobileMenu = () => {
    $('.Menu-Mobile').hide();
  }
  render(){
    return(
        <section className="Menu-Mobile" style={{display:'none'}}>
          <div className="header-menu-mobile">
            <h1>Business Intelligence</h1>
            <img onClick={this.hideMobileMenu} src="/close.svg" alt=""/>
          </div>
          <div className="main">
            <nav>
              <li><img src="/menu-mobile/home.svg" alt=""/><Link to="/">Inicio</Link></li>
              <li><img src="/menu-mobile/servicios.svg" alt=""/><Link to="/service/web">Servicios</Link></li>
              <li><img src="/menu-mobile/portafolio.svg" alt=""/><Link to="/">Portafolio</Link></li>
              <li><img src="/menu-mobile/sobre-nosotros.svg" alt=""/><Link to="/">Nosotros</Link></li>
              <li><img src="/menu-mobile/blog.svg" alt=""/><Link to="/">Blog</Link></li>
              <li><img src="/menu-mobile/contacto.svg" alt=""/><Link to="/">Contacto</Link></li>
            </nav>
          </div>
          <div className="main-service">
            <h4>Diseño web</h4>
            <li><Link to="/">Diseño de ecommerce</Link></li>
            <li><Link to="/">Diseño web</Link></li>
            <li><Link to="/">Diseño de aplicaciones web</Link></li>
            <h4>Marketing digital</h4>
            <h4>Consultoria</h4>
          </div>
        </section>
    )
  }
}

export default MenuMobile;