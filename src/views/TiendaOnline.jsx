import React ,  {Component} from 'react';
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
import Banner from '../components/banner';
import ChatBot from '../components/chat';
import ServiceWall from '../components/ServiceWall';
import ServiceHowHave from '../components/ServiceHowHave';
import ServiceTechnology from '../components/ServiceTechnology';



class TiendaOnline extends Component{

  render(){
    let data = ['Abre tus puertas al mundo y no te quedes coló como un negocio local.',
                'Consigue que tu negocio abra 24 horas, 7 dias a la semana y 365 dias al año.',
                'Fideliza a tus clientes con tu catálogo online, compras fuera de horario y envíos.']
    return(
        <section>
          <Header/>
          <ServiceWall category="Diseño de tiendas online" title="Nos especializamos en el diseño de tiendas online que venden, optimizando la conversión y maximizando los ingresos." features={data}/>
          <ServiceTechnology data=""/>
          <ServiceTechnology data="revert"/>
          <ServiceTechnology data=""/>
          <ServiceHowHave/>
          <Banner/>
          <Opiniones/>
          <ChatBot/>
          <Footer/>
        </section>
    )
  }
}

export default TiendaOnline;