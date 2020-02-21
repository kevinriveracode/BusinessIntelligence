import React , {Component} from 'react'
import Header from '../partials/Home';
import Footer from '../partials/Footer';
import '../sass/utils.scss'
import ButtonBI from '../components/button';
import TitleSection from '../components/title-section';
import ServiceTech from '../components/ServiceTech';
import Opiniones from '../components/opiniones';
import axios from 'axios';

class Contacto extends Component{

  constructor(props){
    super(props)
    this.state = {
      name:'',
      lastname:'',
      email:'',
      message:''
    }
  }

  sendDataForm = async(ev) => {
    ev.preventDefault();
    let emited = `Tienes un mensaje de:  ${this.state.name + ' ' +this.state.lastname} `
    let message = this.state.message;
    let data = await axios.post('https://dev360-back.herokuapp.com/' , {
      name:this.state.name,
      lastname:this.state.lastname,
      email: this.state.email,
      message: this.state.message
    })
    console.log(data);
  };

  bindName = (ev) => {this.setState({name:ev.target.value})};
  bindLastname = (ev) => {this.setState({lastname:ev.target.value})};
  bindEmail = (ev) => {this.setState({email:ev.target.value})};
  bindMessage = (ev) => {this.setState({message:ev.target.value})};

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
                    <input placeholder="Nombre" onChange={this.bindName} value={this.state.name} className="input-default" type="text" required/>
                  </label>
                  <label htmlFor="">
                    <input placeholder="Apellido" onChange={this.bindLastname} value={this.state.lastname} className="input-default" type="text" required/>
                  </label>
                </div>
                <div className="u-flex w-100">
                  <input placeholder="Email" onChange={this.bindEmail} value={this.state.email} className="w-98 input-default" type="email" required/>
                </div>
                  <p className="mgh-1 explain-txt">Explicanos tu problema</p>
                  <textarea value={this.state.message} onChange={this.bindMessage}  className="text-area input-default w-98 h-contact" name="" id="" cols="30" rows="10"></textarea>
                <div>
                  <button onClick={this.sendDataForm} className="contact-button button-header">Enviar</button>
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