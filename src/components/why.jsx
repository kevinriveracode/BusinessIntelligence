import React, {Component} from 'react';
import '../sass/why.scss';

class Why extends Component {
  render() {
    return (
        <section className="Why">
          <div className="why-container-image">
            <img className="img-custom" src="/plantillas/custom-everest.png" alt="Plantillas de diseño web, porque necesito una web, necesito una web, como diseñar una web, cuanto cuesta crear una web"/>
          </div>
          <div className="why-container-text">
            <h1>El mundo se vuelve cada vez más digital</h1>
            <h3>Hoy en dia todos estamos conectados a internet</h3>
            <p>Se trata de una herramienta que nos permite estar en muchas partes al mismo tiempo usando simplemente un ordenador o un dispositivo movil. Como empresarios necesitamos tener precencia en este medio para que los usuarios puedan 
              encontrarnos y conocer nuestras <b>propuestas, nuestros productos y nuestros servicios.</b></p>
            <h3><b>Algunas razones por las que deberias estar en internet son:</b></h3>
            <ul className={"no-list"}>
              <li><p>-Un importante<b> ahorro </b>de costes si quieres dar publicidad a tu negocio.</p></li>
              <li><p>-Te mantendrá cerca de tus clientes o usuarios ya que pueden contactar contigo de forma directa.</p></li>
              <li><p>-Generación de contactos y oportunidades de negocio</p></li>
              <li><p>-Te permitirá desarrollar una estrategia para posicionarte y darte a conocer a nuevos clientes, así como dar respuesta a las necesidades de los clientes 
                que encontrarán en tu web información de calidad y contenido de valor.</p></li>
            </ul>
          </div>
        </section>
    );
  }

}

export default Why;