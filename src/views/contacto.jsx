import React , {Component} from 'react'
import Header from '../partials/Home';
import Footer from '../partials/Footer';

class Contacto extends Component{
  render(){
    return(
        <section>
          <Header/>
          <section className="u-flex">
            <div>
              <h2></h2>
              <p>En <b>DEV360</b> queremos ayudarte desde el primer momento
                Dejanos tu numero y nos ponemos en contacto contigo.</p>
              <hr/>
              <p>
                C/ Plaza musico espi, Nº 10 | Valencia (España)
              </p>
            </div>
            <div>
              <form className="u-flex-col" action="">
                <span>Nombre:</span>
                <label htmlFor="">
                  <input type="text" required/>
                </label>
                <span>E-mail:</span>
                <label htmlFor="">
                  <input type="email" required/>
                </label>
                <span>Telefono:</span>
                <label htmlFor="">
                  <input type="number" required/>
                </label>
                <span>  Explicanos tu problema</span>
                <label htmlFor="">
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </label>
              </form>
            </div>
          </section>
          <Footer/>
        </section>
    )
  }
}

export default Contacto;