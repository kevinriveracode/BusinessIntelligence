import React, {Component} from 'react';
import Header from '../partials/Home';
import Footer from '../partials/Footer';
import ServicesContainter  from '../components/services-container-cards';
import FullPage from '../components/full-page';

class Home extends Component {
  render() {
    return (
        <section>
          <Header/>
          <FullPage/>
          <ServicesContainter/>
          <Footer/>
        </section>
    );
  }
}

export default Home;