import React, {Component} from 'react';
import ButtonBI from './button';
import '../sass/Ficha.scss'
class FichaTienda extends Component {
  render() {
    return (
        <section className="Ficha">
          <div className="ficha-description">
            <h1>
              <span>Vende </span>por Internet
            </h1>
            <p>
              Tener tu propia tienda online te permitirá dar a conocer tus productos y aumentar tus ventas. <br/>

              Por eso, ahora puedes crear tu tienda online sin necesidad de conocimientos técnicos, a través de plantillas de diseño y módulos personalizables. <br/>

              Y si quieres tu propia imagen, ponemos a tu disposición nuestro servicio de diseño y puesta en marcha. Un equipo de diseñadores profesionales te dejará la tienda lista para vender. <br/>

              <b>¡No esperes más, tu competencia ya tiene tienda online! </b> <br/>
            </p>
            <ButtonBI name={"¿Necesitas vender online?"}/>
          </div>
          <div className="ficha-image">
            <img src="/laptop.png" alt=""/>
          </div>
        </section>
    );
  }
}

export default FichaTienda