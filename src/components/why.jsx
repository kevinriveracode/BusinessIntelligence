import React, {Component} from 'react';
import '../sass/why.scss';

class Why extends Component {
  render() {
    return (
        <section className="Why">
          <div className="why-container-image">
            <img src="/digital.png" alt=""/>
          </div>
          <div className="why-container-text">
            <h1>El mundo se vuelve cada vez más digital</h1>
            <h3>Porqué mi negocio necesita una página web y una correcta
              imagen de marca.</h3>
            <p>¿Aun no estas en internet?, deberias saber que internet es uno de
              los canales de venta donde todo el mundo quiere estas. Tener tu
              negocio en linea permitira competir en iguales condiciones con
              otras grandes empresas del sector ya que, cuando una persona
              necesite conocer acerca de un producto o servicio, lo primero que
              hará será consultar en Google, por lo que si la web de la empresa
              logra estar entre los primeros puestos, los usuarios considerarán
              a la marca dentro de sus opciones..</p>
            <h3><b>Algunas razones por las que deberias estar en internet son:</b></h3>
            <ul>
              <li>Alcance mundial</li>
              <li>Posibilidad de competir con las grandes empresas</li>
              <li>Generación de contactos y oportunidades de negocio</li>
              <li>Obtener clientes potenciales</li>
            </ul>
          </div>
        </section>
    );
  }

}

export default Why;