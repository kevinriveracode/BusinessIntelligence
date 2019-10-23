import React, {Component} from 'react';
import ButtonBI from './button';
import '../sass/Ficha.scss'
class Ficha extends Component {
  render() {
    return (
        <section className="Ficha">
          <div className="ficha-description">
            <h1>
              <span>Desarrollo web </span>a medida
            </h1>
            <p>
              Si tu negocio precisa de algún tipo de software para facilitarte el trabajo y el de tus empleados, gestionar de forma cómoda y sencilla cualquier ámbito de tu empresa, mejorar la calidad de la relación con tus clientes, o simplemente darte a conocer.
              Nosotros podemos ayudarte, tenemos una solución adaptada a tus necesidades. <br/>
              El principal objetivo de crear una web a medida, es facilitar la gestión de tu empresa donde tus trabajadores y clientes serán la base del proyecto.
            </p>
            <ButtonBI />
          </div>
          <div className="ficha-image">
            <img src="/laptop.png" alt=""/>
          </div>
        </section>
    );
  }
}

export default Ficha