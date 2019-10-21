import React, {Component} from 'react';
import '../sass/Footer.scss';

class Footer extends Component {
  render() {
    return (
        <React.Fragment>
          <footer className="Footer">
            <div>
              <h2>Condiciones generales</h2>
              <nav>
                <li>Formas de pago</li>
                <li>Impuestos</li>
                <li>Garantía</li>
                <li>Condiciones generales y de privacidad</li>
              </nav>
            </div>
            <div>
              <h2>Servicios</h2>
              <nav>
                <li>Servicio de diseño web</li>
                <li>Servicio de tiendas online</li>
                <li>Servicios de apps movil</li>
                <li>Integración a marketplaces</li>
              </nav>
            </div>
            <div>
              <h2>Pricing</h2>
              <nav>
                <li>Pack de webs</li>
                <li>Tienda All in One</li>
                <li>conexion a marketplaces</li>
                <li>Precio de aplicaciones</li>
              </nav>
            </div>
            <div>
              <h2>Contacta con nosotros</h2>
              <nav>
                <li>Contratar web a medida</li>
                <li>Contratar tienda online</li>
                <li>Contratar app movil</li>
                <li>Centro de ayuda</li>
                <li>Contacte con nosotros</li>
              </nav>
            </div>
          </footer>
          <footer className="copyright">
            <div>
              <h4>© 2019 Business Intelligence Europe. Todos los derechos reservados.</h4>
            </div>
          </footer>
        </React.Fragment>
    );
  }
}

export default Footer;