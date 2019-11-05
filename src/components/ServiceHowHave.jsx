import React , {Component} from 'react'
import '../sass/ServiceHowHave.scss';
class ServiceHowHave extends Component{
  render(){
    return(
        <section className="ServiceHowHave">
          <div>
            <div className="title-section">
              <span>DISEÑO DE TIENDAS ONLINE</span>
              <h2>CARACTERÍSTICAS PRINCIPALES DE LAS TIENDAS ONLINE QUE DISEÑAMOS</h2>
            </div>
            <div className="content-section">
              <div>
                <img src="" alt="image"/>
                <h3>Tiendas online profesionales y económicas</h3>
                <p>Desarrollamos tu tienda online con todo lo que necesitas, con un diseño personalizado a medida</p>
              </div>
              <div>
                <img src="" alt="image"/>
                <h3>Tendrás una tienda online totalmente autogestionable</h3>
                <p>Te enseñamos la gestión básica de tu tienda online, para que puedas llevarla tú, sin depender de nadie.</p>
              </div>
              <div>
                <img src="" alt="image"/>
                <h3>La tienda online será de tu propiedad, 100% a tu nombre</h3>
                <p>La web está alojada en un servidor y con un dominio a tu nombre, por lo que no estarás atado a nadie.</p>
              </div>
              <div>
                <img src="" alt="image"/>
                <h3>Diseño de tiendas online responsive adaptado</h3>
                <p>Ya no vale cualquier diseño, la tienda online debe ser dinámica y adaptada a cualquier pantalla.</p>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default ServiceHowHave