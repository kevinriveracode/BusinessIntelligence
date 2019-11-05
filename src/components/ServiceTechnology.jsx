import React , {Component} from 'react';
import '../sass/ServiceTechnology.scss';
import $ from 'jquery';
class ServiceTechnology extends Component{
  constructor(props){
    super(props);
    this.state = {
      extraClass:''
    }
  }
  render(){

    return(
        <section className={`ServiceTechnology  ${this.props.data}`}>
          <div className="image"></div>
          <div className="text">
            <span>E-commerce</span>
            <h2>Prestashop</h2>
            <p>
              Vender online con PrestaShop significa ofrecer a los comerciantes la posibilidad de superarse y aprovechar las fantásticas oportunidades que brinda internet. <br/>
              Una solución sencilla, eficaz, potente y de alcance internacional, creada para hacer que tu producto, tu idea, tu proyecto, tu tienda o tu startup, se convierta
              en un todo un éxito del e-commerce en las regiones del mundo que tú quieras.
            </p>
            <h5>Caracteristicas de PrestaShop</h5>
            <ul>
              <li>Plantillas personalizables</li>
              <li>BackOffice</li>
              <li>Pago Online</li>
              <li>Expansión internacional</li>
            </ul>
          </div>
        </section>
    )
  }
}

export default ServiceTechnology;