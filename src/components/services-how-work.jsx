import React, {Component} from 'react';
import '../sass/how-work.scss';
import ButtonBI from './button';
class Feature extends Component {
  render() {
    return (
      <div className="feature-item">
        <h3>{this.props.nameFeature}</h3>
        <img src={this.props.image} alt=""/>

        <hr className={`bg-${this.props.color}`}/>
        <p>{this.props.descriptionFeature}</p>
        <ButtonBI/>
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
            <Feature color="red" image="http://82.223.34.28/diseñoweb.png" nameFeature={"Diseño web"} descriptionFeature={'Desarrollamos la página web que tu negocio necesita, orientada siempre al marketing y las ventas.'}></Feature>
            <Feature color="marine" image="http://82.223.34.28/ecommerce.png"  nameFeature={"E-commerce"} descriptionFeature={"Te ayudamos a poner en marcha y a gestionar tu tienda online para que tus ventas despeguen en internet."}></Feature>
            <Feature color="piel" image="http://82.223.34.28/apps.png"  nameFeature={"Desarollo de Apps"} descriptionFeature={'Desarrollamos la app que tu empresa necesite adaptandos a tus necesidades, desarollamos tanto para android como para ios'}></Feature>
            <Feature color="marine-dark" image="http://82.223.34.28/seo.png"  nameFeature={"Posicionamiento SEO"} descriptionFeature={'Haz que te encuentren en Internet gracias a un buen posicionamiento SEO.'}></Feature>
          </div>
        </section>
    );
  }
}

export default HowWork;