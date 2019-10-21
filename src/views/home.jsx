import React, {Component} from 'react';
import Header from '../partials/Home';
import Footer from '../partials/Footer';
import ServicesContainter  from '../components/services-container-cards';
class Home extends Component {
  render() {
    return (
        <section>
          <Header/>
          <ServicesContainter/>
          <Footer/>
        </section>
    );
  }
}

export default Home;