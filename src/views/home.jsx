import React, {Component} from 'react';
import Header from '../partials/Home';
import Footer from '../partials/Footer';
import FullPage from '../components/full-page';
import HowWork from '../components/services-how-work';
import Why  from '../components/why';
import '../sass/home.scss'
import Ficha from '../components/ficha';
import FichaApp from '../components/ficha-app';
import FichaTienda from '../components/ficha-tienda';
import Tools from '../components/tools';
import Opiniones from  '../components/opiniones';
class Home extends Component {
  render() {
    return (
        <section className="Home">
          <Header/>
          <FullPage/>
          <HowWork/>
          <Why/>
          <Ficha/>
          <FichaApp/>
          <FichaTienda/>
          <Tools/>
          <Opiniones/>
          <Footer/>
        </section>
    );
  }
}

export default Home;