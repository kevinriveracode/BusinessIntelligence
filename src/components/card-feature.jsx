import React , {Component} from 'react';
import '../sass/cardFeature.scss'
class CardFeature extends Component {
  render() {
    return (
        <div className="Card-Feature">
          <div>
            <img src="#" alt=""/>
          </div>
          <div className="card-description">
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

export default CardFeature