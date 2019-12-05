import React, {Component} from 'react';
import '../sass/feature.scss';

class FeatureReverse extends Component {
  render() {
    return (
        <section className={'Feature'+' '+ this.props.pos }>
          <div className="feature-text">
            <p>
              <h4>{this.props.slogan}</h4>
              <h2>{this.props.titulo}</h2>
              <p>{this.props.descripcion}</p>
            </p>
          </div>
          <div className="feature-image">
            <img className="img-responsive-25" src={this.props.imagen} alt=""/>
          </div>
        </section>
    );
  }
}

export default FeatureReverse;