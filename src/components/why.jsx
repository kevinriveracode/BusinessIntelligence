import React, {Component} from 'react';
import '../sass/why.scss';

class Why extends Component {
  render() {
    return (
        <section className="Why">
          <div className="why-container-image">
            <img src="http://82.223.34.28/digital.png" alt=""/>
          </div>
          <div className="why-container-text">
              <h1>El mundo se vuelve cada vez más digital</h1>
              <h3>Porqué mi negocio necesita una página web y una correcta
                imagen de marca.</h3>
            <p>Mucho se habla de <b> transformación digital </b> y muchos piensan que
                se trata de tecnología, pero la transformación digital significa
                mucho más. <br/>
                Las empresas necesitan dar el salto a lo digital para aumentar
                los ingresos, reducir los costes, disminuir el riesgo y llegar
                al mercado más rápido que la competencia.
                <br/>
                Pero para ello debemos <b>diseñar, implementar y administrar</b> un
                plan de transformación digital que les guie para alcanzar estos
                objetivos.</p>
            <h3>¿Tienes un proyecto o un negocio?</h3>
            <p>Te ofrecemos soluciones para tu empresa online, desde rediseños y
              creaciones de nuevas páginas web hasta el posicionamiento en
              buscadores (SEO), asesoramiento en marketing online…</p>
          </div>
        </section>
    );
  }

}

export default Why;