import React, {Component} from 'react';
import ButtonBI from './button';
import '../sass/ficha-app.scss'
class FichaApp extends Component {
  render() {
    return (
        <section className="Ficha-app">
          <div className="ficha-image">
            <img src="http://82.223.34.28/app.png" alt=""/>
          </div>
          <div className="ficha-description">
            <h1>
              <span>Aplicaciones </span>para móviles
            </h1>
            <p>
              ¿Tienes una idea o solución que cabe en la palma de la mano? Nosotros, la convertimos en realidad. <br/>
              Desarrollaremos cualquier tipo de aplicación adaptada a todo tipo de dispositivos. <br/>
              Si ya tienes una web, tienda, o cualquier tipo de software. Adaptaremos esa solución y la convertiremos en una nueva aplicación para dispositivos móviles. <br/>
              Te guiaremos desde la fase inicial de desarrollo, hasta la publicación en los marketplaces oficiales de Android e iOS.
            </p>
            <ButtonBI />
          </div>
        </section>
    );
  }
}

export default FichaApp