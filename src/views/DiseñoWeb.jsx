import React , {Component} from 'react'
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
class DiseñoWeb extends Component{
    render(){
        return(
            <section>
                <Header/>
                <ServiceWall category="Diseño de paginas web" title="Hoy en día si quieres ver crecer tu negocio, tanto si empiezas como si ya estás consolidado, necesitas una página web que te sirva como escaparate al mundo y punto de entrada de clientes desde la red, así como un servicio eficaz de posicionamiento para destacar sobre tu competencia. La página web es tu escaparate al mundo. Confía en los mejores." features={[]} />
                <ChatBot/>
                <Footer/>
            </section>
        )
    }
}

export default DiseñoWeb