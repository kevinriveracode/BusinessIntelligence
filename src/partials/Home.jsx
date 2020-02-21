import React , {Component} from 'react'
import '../sass/header.scss';
import ButtonBI from '../components/button';
import { Link } from 'react-router-dom'
import Menu from '../components/menu/menu';
import $ from 'jquery';
import '../sass/utils.scss';
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
    window.location = "http://dev360.es/"
  }
  showMobileMenu = () => {
    $('.Menu-Mobile').show();
  }
  render() {

    return (
        <header id="HeaderNav" className="Header">
         <div className="menu">
           <div className="container-logo">
             <p className="reference-logo u-flex" onClick={this.goToHome}>
               <div>
                 <img className={"logo"} src="/logo.png" alt=""/>
               </div>
               <div>
                 <h1 className="title"> Dev360</h1>
                 <h3 className="subtitle">Agencia de soluciones tecnologicas</h3>
               </div>
             </p>
           </div>
           <div className="primary-menu">
             <nav>
               <li><Link to="/">Inicio</Link></li>
               <li><Link to={"/service/web"}>Diseño web</Link></li>
               <li><Link to={'/service/ecommerce'}>E-commerce</Link></li>
               {/*<li><Link to={'/service/seo'}>SEO</Link></li>*/}
               <li><Link to="/contacto">Contacto</Link></li>
             </nav>
           </div>
           <div className="app-menu">
             <nav>
               <button className="button-header">¿Empezamos?</button>
             </nav>
           </div>
           <div  className="menu-mobile">
             <img onClick={this.showMobileMenu} src="/svg/menu.svg" alt=""/>
           </div>
           <Menu/>
         </div>
        </header>
    );
  }
}
export default Header