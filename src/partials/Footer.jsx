import React, {Component} from 'react';
import '../sass/Footer.scss';

class Footer extends Component {
  render() {
    return (
        <React.Fragment>   
          <footer className="copyright">
            <div>
              <h4> <b> © 2019DEV360 </b> Europe. Todos los derechos reservados.</h4>
            </div>
          </footer>
        </React.Fragment>
    );
  }
}

export default Footer;