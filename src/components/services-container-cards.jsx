import React, {Component} from 'react';
import '../sass/ServicesContainer.scss';
import CardFeature from './card-feature';

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