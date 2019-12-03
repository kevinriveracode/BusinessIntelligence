import React, {Component} from 'react';
import '../sass/how-work.scss';
import ButtonBI from './button';
import '../sass/button.scss';

import {Link} from 'react-router-dom';
class Feature extends Component {
  render() {
    return (
      <div className="feature-item">
        <h3>{this.props.nameFeature}</h3>
        <img src={this.props.image} alt=""/>

        <hr className={`bg-${this.props.color}`}/>
        <p>{this.props.descriptionFeature}</p>

        <Link to={this.props.url}>
          <button className="Button">
            {this.props.button}
          </button>
        </Link>
      </div>
    );
  }
}

class HowWork extends Component {
  render() {
    return (
        <section className="HowWork">
          <div className="section-title">
            <h2>¿Que <b>ofrecemos?</b></h2>
            <p>Planes estratégicos de <b>comunicación, diseño y marketing </b> que darán
              visibilidad a tu negocio.</p>
          </div>
          <div className="section-features">
            <Feature url="service/web" button="Desde 249€" color="red" image="/diseñoweb.png" nameFeature={"Diseño web"} descriptionFeature={'Desarrollamos la pagina web que tu negocio necesita, orientandola siempre a los objetivos que nuestro clientes necesitan.'}></Feature>
            <Feature url="service/ecommerce"  button="Desde 499€" color="marine" image="/ecommerce.png"  nameFeature={"E-commerce"} descriptionFeature={"Te ayudamos a poner en marcha y a gestionar tu tienda online para que tus ventas despeguen en internet."}></Feature>
            <Feature url="service/apps" button="Desde 899€" color="piel" image="/apps.png"  nameFeature={"Desarollo de Apps"} descriptionFeature={'Desarrollamos la app que tu empresa necesite adaptandos a tus necesidades, desarollamos tanto para android como para ios'}></Feature>
            <Feature url="service/seo"  button="Desde 90€" color="marine-dark" image="/seo.png"  nameFeature={"Posicionamiento SEO"} descriptionFeature={'Haz que te encuentren en Internet gracias a un buen posicionamiento SEO.'}></Feature>
          </div>
        </section>
    );
  }
}

export default HowWork;