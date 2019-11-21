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
import MenuMobile from '../components/menu-mobile';
import TitleSection from '../components/title-section';
import Feature from '../components/feature';
import FeatureReverse from '../components/feature-reverse';



class TiendaOnline extends Component{
  constructor(props){
    super(props);
    this.state = {
      howHave: [
        {
          image:'/ecommerce/profesional.svg',
          title:'Tiendas online profesionales y económicas',
          description:'Desarrollamos tu tienda online con todo lo que necesitas, con un diseño personalizado a medida'
        } ,
        {
          image:'/ecommerce/gestionable.svg',
          title:'Tendrás una tienda online totalmente autogestionable',
          description:'Te enseñamos la gestión básica de tu tienda online, para que puedas llevarla tú, sin depender de nadie.'
        },
        {
          image:'/ecommerce/own.svg',
          title:'La tienda online será de tu propiedad, 100% a tu nombre',
          description:'La web está alojada en un servidor y con un dominio a tu nombre, por lo que no estarás atado a nadie.'
        },
        {
          image:'/ecommerce/tablet.svg',
          title:'Diseño de tiendas online responsive adaptado',
          description:'Ya no vale cualquier diseño, la tienda online debe ser dinámica y adaptada a cualquier pantalla.'
        }
      ],
      advantages:[
        {
          slogan:'El centro de todas las miradas',
          title:'Mil maneras de atraer clientes',
          description:'Tú decides si quieres vender un millón de productos o si por el contrario, decides especializarte en solo unos pocos. Añade variaciones como tamaño y color y descripciones que inciten a comprar.\n' +
              'Cuando quieras añadir otro producto, simplemente carga los detalles online y estará listo para tus clientes en solo unos minutos.',
          img:'/diseño.jpg'
        },
        {
          slogan: 'Aplicación móvil',
          title: 'Gestiona tu tienda desde cualquier lugar',
          description: 'Añade y modifica los datos de tus productos directamente desde tu smartphone, escanea el código de barras, haz una foto, añade una descripción y tu producto estará online.\n' +
              'Lleva un seguimiento y registro de tus ventas, además de mantener tus finanzas a la vista.',
          img:'/appShop.svg'
        },
        {
          slogan:'Opciones de pago flexibles',
          title:'Haz que te lluevan pedidos',
          description:'El hecho de ofrecer o no los métodos de pago adecuados puede ser decisivo para tus clientes a la hora de comprar o no en tu tienda. Además de las opciones tradicionales como Paypal o tarjeta de crédito, los usuarios pueden escoger entre diferentes opciones de pago según su localización y su mercado. Crea confianza y atrae más clientes.',
          img:'/pedidos.svg'
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
        },
        {
          image:'',
          name:'WooCommerce',
          description:'Vender online con PrestaShop significa ofrecer a los comerciantes la posibilidad de superarse y aprovechar las fantásticas oportunidades que brinda internet. Una solución sencilla, eficaz, potente y de alcance internacional, creada para hacer que tu producto, tu idea, tu proyecto, tu tienda o tu startup, se conviertaen un todo un éxito del e-commerce en las regiones del mundo que tú quieras.',
          features:[
            'Plantillas personalizables',
            'BackOffice',
            'BackOffice',
            'Expansión internacional'
          ],
          view:'revert'
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
          <TitleSection title={'Tu escaparate al mundo'} subtitle={'Abre un mundo de posibilidades en minutos.'}/>
          <Feature/>
          <ServiceHowHave items={this.state.howHave} section="DISEÑO DE TIENDAS ONLINE" sectiondes="CARACTERÍSTICAS PRINCIPALES DE LAS TIENDAS ONLINE QUE DISEÑAMOS" />
          <FeatureReverse imagen={this.state.advantages[0].img} slogan={this.state.advantages[0].slogan} titulo={this.state.advantages[0].title} descripcion={this.state.advantages[0].description} pos={''}/>
          <FeatureReverse imagen={this.state.advantages[1].img} slogan={this.state.advantages[1].slogan} titulo={this.state.advantages[1].title} descripcion={this.state.advantages[1].description}  pos={'start'}/>
          <FeatureReverse imagen={this.state.advantages[2].img} slogan={this.state.advantages[2].slogan} titulo={this.state.advantages[2].title} descripcion={this.state.advantages[2].description} pos={''}/>
          <TitleSection title={'Atrevete a dar el paso'} subtitle={'Escoge entre multiples opciones.'}/>
          {this.state.tecnologias.map((tool)=> {
            return(<ServiceTechnology name={tool.name} description={tool.description} features={tool.features} view={tool.view} />)
          })}
          <Banner/>
          <Opiniones/>
          <ChatBot/>
          <Footer/>
          <MenuMobile />
        </section>
    )
  }
}

export default TiendaOnline;