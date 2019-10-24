import React, {Component} from 'react';
import ButtonBI from './button';
import '../sass/banner.scss'
class Banner extends Component {
  render() {
    return (
        <section className="Banner">
          <div>
            <h2>Nuestro trabajo es también nuestra pasión</h2>
            <p>Pide ahora tu presupuesto personalizado. Sin compromisos. Los mejores precios de Valencia.</p>
          </div>
          <div className="contact-button">
            <ButtonBI/>
          </div>
        </section>
    );
  }
}

export default Banner;