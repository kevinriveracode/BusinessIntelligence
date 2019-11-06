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
              <img src="" alt=""/>
              <h2>Diseño Web</h2>
              <p>Desarrollamos sitios web con las mejores intenciones y resultados sobresalientes.</p>
            </div>
            <div className="ServiceLink" onClick={this.goToTienda}>
              <img src="/svg/tienda.svg" alt=""/>
              <p>
                <h3>Diseño de tiendas online</h3>
                <p>Trabajamos en montar tu negocio online, sin descuidar la usabilidad y la experiencia de usuario.</p>
              </p>
            </div>
            <div className="ServiceLink" onClick={this.goToWeb}>
              <img src="/svg/webmedida.svg" alt=""/>
              <p>
                <h3>Diseño Web a Medida</h3>
                <p>La clave del exito del desarrollo web a medida es, sin duda, la consecución de objetivos</p>
              </p>
            </div>
            <div className="ServiceLink">
              <img src="/svg/aplicacionweb.svg" alt=""/>
              <p>
                <h3>Desarrollo de Aplicaciones Web</h3>
                <p>Fabricamos cualquier tipo de aplicación con tecnologia web... exprime tus ideas</p>
              </p>
            </div>
          </div>
          <div className="MenuServiceWeb">
            <div className="TitleMenuService">
              <img src="" alt=""/>
              <h2>Marketing Online</h2>
              <p>Olvidate de las formulas que prometen el oro y el moro. Aqui tienes la solución.</p>
            </div>
            <div className="ServiceLink">
              <img src="/svg/seo.svg" alt=""/>
              <p>
                <h3>SEO - Posicionamiento web</h3>
                <p>El posicionamiento SEO no solamente es un termino de moda, te permitira estar
                  en las primeras posiciones de google.</p>
              </p>
            </div>
            <div className="ServiceLink">
              <img src="/svg/marketing.svg" alt=""/>
              <p>
                <h3>SEM - Agencia de AdWords</h3>
                <p>Mejora el nivel de conversión del sitio web mediante tecnicas de analisis,observacion y acción.</p>
              </p>
            </div>
            <div className="ServiceLink">
              <img src="/svg/objetivos.svg" alt=""/>
              <p>
                <h3>CRO - Optimizacion de conversión</h3>
                <p>Fabricamos cualquier tipo de aplicación con tecnologia web... exprime tus ideas</p>
              </p>
            </div>
          </div>
          <div className="MenuServiceWeb">
            <div className="TitleMenuService">
              <img src="" alt=""/>
              <h2>Consultoria Estrategica</h2>
              <p>Nos centramos en objetivos como estrategia fundamental para el exito</p>
            </div>
            <div className="ServiceLink">
              <img src="/svg/auditoria.svg" alt=""/>
              <p>
                <h3>Auditoria Web</h3>
                <p>Tanto la construcción de un nuevo sitio como el rediseño de uno viejo, requiere planificacion y ánalisis</p>
              </p>
            </div>
            <div className="ServiceLink">
              <img src="/svg/consultoria.svg" alt=""/>
              <p>
                <h3>Consultoría de Posicionamiento Web</h3>
                <p>Alguien esta buscando por las palabras clave de tu negocio justo en este momento, mientras lees esto.</p>
              </p>
            </div>
            <div className="ServiceLink">
              <img src="/svg/analisis.svg" alt=""/>
              <p>
                <h3>Investigación y Planificación</h3>
                <p>Lo importante es atender a tu público y brindarles soluciones integrales.</p>
              </p>
            </div>
          </div>
        </section>
    )
  }
}
export default Menu;
