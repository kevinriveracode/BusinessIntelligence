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
  constructor(props){
    super(props);
    this.state = {
      tecnologias:[
        {
          image:'',
          name:'PrestaShop',
          description:'Vender online con PrestaShop significa ofrecer a los comerciantes la posibilidad de superarse y aprovechar las fantásticas oportunidades que brinda internet. Una solución sencilla, eficaz, potente y de alcance internacional, creada para hacer que tu producto, tu idea, tu proyecto, tu tienda o tu startup, se conviertaen un todo un éxito del e-commerce en las regiones del mundo que tú quieras.',
          features:[
              'Plantillas personalizables',
              'BackOffice',
              'BackOffice',
              'Expansión internacional'
          ],
          view:''
        },
        {
          image:'',
          name:'Shopify',
          description:'Vender online con PrestaShop significa ofrecer a los comerciantes la posibilidad de superarse y aprovechar las fantásticas oportunidades que brinda internet. Una solución sencilla, eficaz, potente y de alcance internacional, creada para hacer que tu producto, tu idea, tu proyecto, tu tienda o tu startup, se conviertaen un todo un éxito del e-commerce en las regiones del mundo que tú quieras.',
          features:[
            'Plantillas personalizables',
            'BackOffice',
            'BackOffice',
            'Expansión internacional'
          ],
          view:'revert'
        },
        {
          image:'',
          name:'Magento',
          description:'Vender online con PrestaShop significa ofrecer a los comerciantes la posibilidad de superarse y aprovechar las fantásticas oportunidades que brinda internet. Una solución sencilla, eficaz, potente y de alcance internacional, creada para hacer que tu producto, tu idea, tu proyecto, tu tienda o tu startup, se conviertaen un todo un éxito del e-commerce en las regiones del mundo que tú quieras.',
          features:[
            'Plantillas personalizables',
            'BackOffice',
            'BackOffice',
            'Expansión internacional'
          ],
          view:''
        }
      ]
    }
  }
  render(){
    let data = ['Abre tus puertas al mundo y no te quedes coló como un negocio local.',
                'Consigue que tu negocio abra 24 horas, 7 dias a la semana y 365 dias al año.',
                'Fideliza a tus clientes con tu catálogo online, compras fuera de horario y envíos.']
    return(
        <section>
          <Header/>
          <ServiceWall category="Diseño de tiendas online" title="Nos especializamos en el diseño de tiendas online que venden, optimizando la conversión y maximizando los ingresos." features={data}/>
          <ServiceHowHave/>
          {this.state.tecnologias.map((tool)=> {
            return(<ServiceTechnology name={tool.name} description={tool.description} features={tool.features} view={tool.view} />)
          })}
          <Banner/>
          <Opiniones/>
          <ChatBot/>
          <Footer/>
        </section>
    )
  }
}

export default TiendaOnline;