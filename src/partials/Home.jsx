import React , {Component} from 'react'
import '../sass/header.scss';
import ButtonBI from '../components/button';
import { Link } from 'react-router-dom'
import Menu from '../components/menu/menu';
import $ from 'jquery';
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu:false,
      menuMobile: false
    }
  }
  stickyMenu = () => {
    let header = document.getElementById('HeaderNav');
    let sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add('HeaderPosition');
      $('.Menu').css('top','12vh !important')
    } else {
      header.classList.remove('HeaderPosition');
      $('.Menu').css('top','16vh !important')
    }
  };
  handlerMenu= () => {
    if(this.state.menu === false){
      $('.Menu').css('visibility','visible');
      this.setState({menu:true});
    }else{
      $('.Menu').css('visibility','hidden');
      this.setState({menu:false});
    }
 
  }
  goToHome = () => {
    window.location = "http://localhost:3000"
  }
  showMobileMenu = () => {
    $('.Menu-Mobile').show();
  }
  render() {
    window.onscroll = () => {
      this.stickyMenu();
    };
    return (
        <header id="HeaderNav" className="Header">
          <div className="container-logo">
            <p className="reference-logo" onClick={this.goToHome}>
              <h1 className="title">Business Intelligence</h1>
              <h3 className="subtitle">AGENCIA DE SOLUCIONES TECNOLOGICAS</h3>
            </p>
          </div>
          <div className="primary-menu">
            <nav>
              <li><Link to="/">Inicio</Link></li>
              <li ><a onClick={this.handlerMenu}>Servicios</a></li>
              <li><Link to="/">Portafolio</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </nav>
          </div>
          <div className="app-menu">
            <nav>
              <ButtonBI name={"¿Tienes dudas?"}/>
            </nav>
          </div>
          <div  className="menu-mobile">
            <img onClick={this.showMobileMenu} src="/svg/menu.svg" alt=""/>
          </div>
          <Menu/>
        </header>
    );
  }
}
export default Header