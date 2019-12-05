import React, {Component} from 'react';
import ButtonBI from './button';
import '../sass/feature.scss';

class Feature extends Component {
  render() {
    return (
        <section className="Feature">
          <div className="feature-image">
            <img className={"img-responsive-35"} src="/shop/ecommerce2.png" alt=""/>
          </div>
          <div className="feature-text">
            <p>
              <h4>{this.props.slogan}</h4>
              <h2>{this.props.title}</h2>
              <p>{this.props.descripcion}</p>

              <ButtonBI name={this.props.button}/>
            </p>
          </div>
        </section>
    );
  }
}

export default Feature;