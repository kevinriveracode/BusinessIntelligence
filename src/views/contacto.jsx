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
          <section className="u-flex h-100 content-box ">
            <div className="w-100 u-flex jc-center box-container contact-position">
              <form className="u-flex-col w-75 formulario-contacto" action="">
                <div className="u-flex jc-between">
                  <label htmlFor="">
                    <input placeholder="Nombre" className="input-default" type="text" required/>
                  </label>
                  <label htmlFor="">
                    <input placeholder="Apellido" className="input-default" type="text" required/>
                  </label>
                </div>
                <div className="u-flex w-100">
                  <input placeholder="Email" className="w-98 input-default" type="email" required/>
                </div>
                  <p className="mgh-1 explain-txt">Explicanos tu problema</p>
                  <textarea  className="text-area input-default w-98 h-contact" name="" id="" cols="30" rows="10"></textarea>
                <div>
                  <button className="contact-button button-header">Enviar</button>
                </div>
              </form>
            </div>
          </section>
          <TitleSection title="Una Solución Completa" subtitle="Hemos pensado para que tú no tengas que pensar en nada"/>
          <ServiceTech/>
          <Footer/>
        </section>
    )
  }
}

export default Contacto;