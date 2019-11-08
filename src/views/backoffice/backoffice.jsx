import React , {Component} from 'react';
import '../../sass/backoffice/backoffice.scss'
class BackOffice extends Component{
  render(){
    return(
        <section className="backoffice">
          <div className="BackofficeHeader">
            <div>
              <h3>PANEL DE CONTROL</h3>
              <span>BusinessIntelligence</span>
            </div>
          </div>
          <div className="BackofficeBody">
            <div className="navigation">
              <h3>Hola, Kevin</h3>
              <span>te estabamos esperando.</span>
              <nav>
                <li>Mis tiendas</li>
                <li>Mis paginas</li>
                <li>Mis servicios</li>
              </nav>
            </div>
            <div className="body-content">
              <p>Menu de contenido</p>
            </div>
          </div>
        </section>
    )
  }
}

export default BackOffice;