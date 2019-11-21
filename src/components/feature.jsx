import React, {Component} from 'react';
import ButtonBI from './button';
import '../sass/feature.scss';

class Feature extends Component {
  render() {
    return (
        <section className="Feature">
          <div>
            <img src="/todo.svg" alt=""/>
          </div>
          <div className="feature-text">
            <p>
              <h4>Crece y evoluciona</h4>
              <h2>Todo lo que necesitas para vender en internet</h2>
              <p>Para crear grandes cosas, tienes que dar primero pequeños
                pasos. Disfruta de los beneficios de contar con una plataforma
                que hace que tu tienda online destaque. <br/>Los packs de tiendas
                online de MyWebsite eCommerce ayudan a que tu negocio crezca y
                evolucione, e
                incluye todas las herramientas que necesitas para tener en
                éxito.</p>
              <ButtonBI/>
            </p>
          </div>
        </section>
    );
  }
}

export default Feature;