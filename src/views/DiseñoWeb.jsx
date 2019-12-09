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
import MenuMobile from '../components/menu-mobile';
import Feature from '../components/feature';
import TitleSection from '../components/title-section';
import AdapterPack from '../components/adapterPack';
class DiseñoWeb extends Component{
  constructor(props){
    super(props);
    this.state = {
      howHave:[
        {
          image:'/webiconos/amedida.svg',
          title:'Diseño a medida',
          description:'Parte del éxito es, sin duda, su diseño, construido en exclusiva para un público y una idea.'
        },
        {
          image:'/webiconos/responsive.svg',
          title:'Responsive 100%',
          description:'Diseñadas para mejorar la usabilidad y la experiencia del usuario en cualquier dispositivo.'
        },
        {
          image:'/webiconos/gestion.svg',
          title:'Autogestión',
          description:'Proyectos que permiten un crecimiento constante y a la medida de las necesidades'
        },
        {
          image:'/webiconos/crecimiento.svg',
          title:'Crecimiento',
          description:'Desarrollos potencialmente exitosos, creados para lo que realmente importa: las ventas.'
        },
      ],
      tecnologias:[
        {
          image:'/brands/wordpress.png',
          name:'WordPress',
          description:'La cifra es escandalosa; Según un informe de W3Techs, el 30% de todas las webs están hechas con WordPress.WordPress fue creado originalmente para la gestión de blogs, pero con el paso de los años, la fuerte comunidad que hay detrás ha ido mejorando el producto según las necesidades detectadas y añadiendo nuevas funciones que hoy en día nos permiten hacer casi cualquier tipo de Web',
          features:[
            'Plantillas personalizables',
            'BackOffice',
            'BackOffice',
            'Expansión internacional'
          ],
          view:''
        },

        {
          image:'/brands/joomla.png',
          name:'Joomla',
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
        let feat =['Abre tus puertas al mundo y no te quedes coló como un negocio local.',
          'Consigue que tu negocio abra 24 horas, 7 dias a la semana y 365 dias al año.',
          'Fideliza a tus clientes con tu catálogo online, compras fuera de horario y envíos.']
        return(
            <section>
                <Header/>
                <ServiceWall features={feat} image="/web/wallweb.png" category="Diseño de paginas web" title="Hoy en día si quieres ver crecer tu negocio, tanto si empiezas como si ya estás consolidado, necesitas una página web que te sirva como escaparate al mundo y punto de entrada de clientes desde la red." />
                <TitleSection title="Diseños web exclusivos" subtitle="Páginas Web con diseño exclusivo para pymes, autónomos y emprendedores"/>
                <Feature slogan={"Desarrollo y diseño web"} title={"Tu pagina web es tu imagen de cara al mundo"} descripcion={"Creamos páginas web con un diseño unico y exclusivo que te ayudara" +
                " a diferenciarte de la competencia. Creamos paginas que se adapten a todos los dispositivos, móvil incluido, y funcionen perfectamente gracias al uso de las ultimas teconlogias y ultimos estandares en programación web." +
                "Tendras una web con personalidad, con mensaje y coherente a tu estrategia de negocio"} button={"¿Necesitas una web?"}/>
                <ServiceHowHave items={this.state.howHave} section="DISEÑO DE PAGINAS WEB" sectiondes="CARACTERÍSTICAS PRINCIPALES DE LAS PAGINAS WEB QUE DISEÑAMOS"/>
                {/*{this.state.tecnologias.map((tool)=> {*/}
                {/*  return(<ServiceTechnology image={tool.image} name={tool.name} description={tool.description} features={tool.features} view={tool.view} />)*/}
                {/*})}*/}
                <Banner/>
                <TitleSection title="Selecciona el pack que mas se adapte a tus necesidades" subtitle=""/>
                <AdapterPack/>
                <Opiniones/>
                <Footer/>
                <MenuMobile/>
            </section>
        )
    }
}

export default DiseñoWeb