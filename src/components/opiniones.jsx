import React , {Component} from 'react';
import '../sass/opiniones.scss';

class Opiniones extends Component{
  render(){
    return(
        <section className="Opiniones">
          <div>
            <h2>¿Qué opinan nuestros clientes?</h2>
            <img src="#" alt=""/>
            <p>Como vicepresidente de Microsoft Iberoamericano, no podemos sino valorar muy positivamente el trabajo de BusinessIntelligence para nuestra institución.</p>
            <p><b>Kevin Rivera Ramirez</b></p>
            <p><l>Desarrollador Web FullStack</l></p>
          </div>
        </section>
    )
  }
}

export default Opiniones