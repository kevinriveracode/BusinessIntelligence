import React, {Component} from 'react';
import '../sass/ServicesContainer.scss';
import '../sass/cardFeature.scss'
class CardFeature extends Component {
  render() {
    return (
        <div className="Card-Feature">
          <div>
            <img src="#" alt=""/>
          </div>
          <div>
            <p>
              <h2>Ecommerce</h2>
              <p>Creamos Ecommerce a medida para lideres enfocados en brindar la
                mejor
                experiencia al usuario final con un diseño intuitivo y una
                plataforma escalable.</p>
            </p>
          </div>
          <div>
            <hr/>
            <nav>
              <li>Estrategia Ecommerce</li>
              <li>Diseño y Desarrollo a medida</li>
              <li>Data</li>
            </nav>
          </div>
        </div>
    );
  }
}

class ServicesContainter extends Component {
  render() {
    return (
        <section className="ServicesContainer">
          <CardFeature></CardFeature>
          <CardFeature></CardFeature>
          <CardFeature></CardFeature>
        </section>
    );
  }
}

export default ServicesContainter;