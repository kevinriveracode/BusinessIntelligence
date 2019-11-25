import React, {Component} from 'react';
import '../sass/full-page.scss';
import ButtonBI from './button';
import AppCalculatePrice from './CalculaWeb';



class FullPage extends Component {
  render() {
    return (
        <section className="FullPage">
          <div className="target-info">
            <h2>Diseño web, Desarrollo de aplicaciones y SEO</h2>
            <h1>Tu lo imaginas, nosotros lo creamos</h1>
            <ButtonBI name={"¿Tienes un proyecto?"}/>
          </div>
          <div className="target-image">
            <AppCalculatePrice/>
          </div>
        </section>
    );
  }
}

export default FullPage;