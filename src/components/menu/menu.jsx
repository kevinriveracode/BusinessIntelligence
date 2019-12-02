import React , {Component} from 'react'
import './menu.scss';

class Menu extends Component{
  
  goToWeb = () => {
    window.location = 'http://localhost:3000/service/web'
  }
  goToTienda = () => {
    window.location = 'http://localhost:3000/service/ecommerce'
  }

  render(){
    return(
        <section className="Menu">
          <div className="MenuServiceWeb">
            <div className="TitleMenuService">
              <img className="img-responsive" src="/svg/webmedida.svg" alt="Diseño de paginas web, desarrollo web a medida, wordpress, prestashop, cms, administra tu pagina web"/>
              <h2>Diseño Web</h2>
              <p>Desarrollamos paginas web para personas o empresas que desean dejar su marca en internet,
                siempre pensando en un diseño elegante y una experiencia de usuario unica.
              </p>
            </div>
          </div>
          <div className="MenuServiceWeb">
            <div className="TitleMenuService">
              <img className="img-responsive" src="/svg/tienda.svg" alt="Desarrollo, ecommerce, tienda online, vender por internet, compras en internet, paginas web para vender, prestashop, cms, valencia , españa"/>
              <h2>Diseño de tiendas online</h2>
              <p>¿Necesitas vender por internet? En DEV360 nos encargamos de darle vida a tu proyecto,
                hacemos todo tipo de tiendas online, podras escoger entre varias plantillas o podemos
                hacer un proyecto personalizado y diferenciar tu idea.
              </p>
            </div>
          </div>
          <div className="MenuServiceWeb">
            <div className="TitleMenuService">
              <img src="/svg/consultoria.svg" className="img-responsive" alt=""/>
              <h2>Consultoria Estrategica</h2>
              <p>Sabemos que tener una pagina web no basta para hacerte conocer, para ello desde DEV360 
                ofrecemos distintos planes para trabajar en darle visibilidad a tu negocio. 
                <b>Nos encargamos de tu entorno digital</b> mientras tu construyes tu negocio. 
              </p>
            </div>
          </div>
        </section>
    )
  }
}
export default Menu;
