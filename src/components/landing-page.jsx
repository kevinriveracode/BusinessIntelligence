import React , {Component} from 'react';
import '../sass/landing-web.scss';

class LandingWeb extends  Component{
  render() {
    return(
        <section className="LandingWeb">
          <div>
            <p>
              <span>Sencilla, directa y al grano</span>
              <h3>Landing Page</h3>
              <p>
                Si tienes una campaña que merece realmente la pena, te proponemos una landing page.
                Páginas con una imagen potente, focalizadas en un objetivo y
                optimizadas para convertir a tus usuarios en clientes. Sencilla, directa y al grano. <br/>
                En muchas ocasiones lo susuarios que entran en una buena web se van, sin mas, puede que para siempre.
                El funcionamiento de la <i>landing page</i> es diferente.Con una imagen atractiva y pocas opciones de navegación, su estructura se encamina a conseguir subscriptores o
                nuevos clientes. COn muchas opciones de éxito, sin distracciones innecesarias.
              </p>
            </p>
          </div>
          <div>
            <img src="/landing-page.png" alt=""/>
          </div>
        </section>
    )
  }
}

export default LandingWeb;