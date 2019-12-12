import React , {Component} from 'react'
import Header from '../partials/Home';
import Footer from '../partials/Footer';
import '../sass/utils.scss'
import ButtonBI from '../components/button';
import TitleSection from '../components/title-section';
import ServiceTech from '../components/ServiceTech';
import Opiniones from '../components/opiniones';
class Contacto extends Component{
  render(){
    return(
        <section>
          <Header/>
          <TitleSection title="Es momento de actuar" subtitle=""/>
          <section className="u-flex h-100 content-box">
            <div className="w-50">
              <h2 className="contact-title">¿Comenzamos?</h2>
              <p className="contact-parrafo">En <b>DEV360</b> queremos ayudarte desde el primer momento
                Dejanos tu numero y nos ponemos en contacto contigo.</p>
              <hr/>
              <p>
                C/ Plaza musico espi, Nº 10 | Valencia (España)
              </p>
            </div>
            <div className="w-50 u-flex jc-center">
              <form className="u-flex-col w-75" action="">
                <span>Nombre:</span>
                <label htmlFor="">
                  <input className="input-default" type="text" required/>
                </label>
                <span>E-mail:</span>
                <label htmlFor="">
                  <input className="input-default" type="email" required/>
                </label>
                <span>Telefono:</span>
                <label htmlFor="">
                  <input className="input-default" type="number" required/>
                </label>
                <span>  Explicanos tu problema</span>
                <label htmlFor="">
                  <textarea className="input-default" name="" id="" cols="30" rows="10"></textarea>
                </label>
              </form>
            </div>
          </section>
          <TitleSection title="Una Solución Completa" subtitle="Hemos pensado para que tú no tengas que pensar en nada"/>
          <ServiceTech/>
          <Opiniones/>
          <Footer/>
        </section>
    )
  }
}

export default Contacto;