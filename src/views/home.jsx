import React, {Component} from 'react';
import Header from '../partials/Home';
import Footer from '../partials/Footer';
import ServicesContainter  from '../components/services-container-cards';
import FullPage from '../components/full-page';
import HowWork from '../components/services-how-work';
import Why  from '../components/why';
import '../sass/home.scss'
import Ficha from '../components/ficha';
import FichaApp from '../components/ficha-app';
import FichaTienda from '../components/ficha-tienda';
class Home extends Component {
  render() {
    return (
        <section className="Home">
          <Header/>
          <FullPage/>
          {/*
          <section className="MainMessage">
            <h1>Business Intelligence</h1>
            <p>Somos especialistas en diseño web, branding y diseño gráfico. Te ayudamos a crear el ecommerce para tu negocio o mejorar el posicionamiento de tu web en buscadores.</p>
          </section>
          */}
          <HowWork/>
          <Why/>
          <Ficha/>
          <FichaApp/>
          <FichaTienda/>
          <ServicesContainter/>
          <Footer/>
        </section>
    );
  }
}

export default Home;