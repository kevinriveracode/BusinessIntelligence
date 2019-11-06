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
      howHave: [
        {
          image:'',
          title:'Tiendas online profesionales y económicas',
          description:'Desarrollamos tu tienda online con todo lo que necesitas, con un diseño personalizado a medida'
        } ,
        {
          image:'',
          title:'Tendrás una tienda online totalmente autogestionable',
          description:'Te enseñamos la gestión básica de tu tienda online, para que puedas llevarla tú, sin depender de nadie.'
        },
        {
          image:'',
          title:'La tienda online será de tu propiedad, 100% a tu nombre',
          description:'La web está alojada en un servidor y con un dominio a tu nombre, por lo que no estarás atado a nadie.'
        },
        {
          image:'',
          title:'Diseño de tiendas online responsive adaptado',
          description:'Ya no vale cualquier diseño, la tienda online debe ser dinámica y adaptada a cualquier pantalla.'
        }
      ],
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
          <ServiceHowHave items={this.state.howHave} section="DISEÑO DE TIENDAS ONLINE" sectiondes="CARACTERÍSTICAS PRINCIPALES DE LAS TIENDAS ONLINE QUE DISEÑAMOS" />
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