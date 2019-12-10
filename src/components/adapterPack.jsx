import React , {Component} from 'react';
import ButtonBI from './button';
import '../sass/packs.scss'
import '../sass/utils.scss'
class Pack extends Component{
  render(){
    return(
        <section>
          <div className="pack">
            <div className="u-flex jc-between">
              <h2 className="u-flex al-center"> <img className="img-pack" src={this.props.data.img} />{this.props.data.name}</h2>
              <span>{this.props.data.price}€</span>
            </div>
            <ul className="no-list">
              {this.props.data.features.map((feature,index)=>{
                return(<li key={index}><img className={'tick'} src={"/tick.svg"}></img>{feature}</li>)
              })}
            </ul>
            {/*<h4>{this.props.data.price}</h4>*/}
            <ButtonBI name="Más Info +"></ButtonBI>
          </div>
        </section>
    )
  }
}

class AdapterPack extends Component{
  constructor(props){
    super(props)
    this.state = {
      packToShow: [],
      packsEcommerce:[
        {
          name:'Pack Shanghái',
          img:'/web/svg/shanghai.svg',
          features:[
            'Productos ilimitados',
            'Panel de gestión y precios',
            'Paypal, targeta y transferencia.',
            'Notificaciones automáticas',
            'Programación en WordPress',
            'Diseño grafico original',
            'Secciones ilimitadas',
            'Diseño de slogans',
            'Formación'
          ],
          descripcion:'',
          price: 1950,
          link:''
        },
        {
          name:'Pack Bangok',
          img:'/web/svg/bangok.svg',
          features:[
           'Productos ilimitados',
           'Paypal, targeta y transferencia',
           'Notificaciones automáticas',
           'Multi-idioma(Hasta 5)',
           'Programación Wordpress o Prestashop',
           'Logistica y envios',
           'Estrategia de comunicación',
           'Plan de lanzamiento(Adwords y Facebook)',
           'Secciones ilimitadas',
           'Web móvil (responsive)'
          ],
          descripcion:'',
          price: 1950,
          link:''
        },
        {
          name:'A medida',
          img:'/web/svg/medida.svg',
          features:[
           'Portales de anuncio',
           'Redes sociales',
           'Subastas',
           'Plataformas tecnolǵicas',
           'Funciones especiales',
           'Software personalizado',
           'Creación de plugins'
          ],
          descripcion:'',
          price: 1950,
          link:''
        }
      ],
      packsWeb:[
        {
          name:'Pack Tokio',
          img:'/web/svg/tokio.svg',
          features:[
              'Diseño gráfico original',
              'Secciones ilimitadas',
              'Categorización',
              'Web móvil (Responsive)',
              '15 Imagenes premiun',
              'Integración Redes Sociales',
              'Panel de administración',
              'Formación'
          ],
          descripcion:'',
          price: 450,
          link:''
        },
        {
          name:'Pack Moscu',
          img:'/web/svg/moscu.svg',
          features:[
            'Diseño gráfico original',
            'Secciones ilimitadas',
            'Diseño de Slogans',
            'Categorización',
            'Web móvil (Responsive)',
            '20 Imagenes premium',
            'Integración Redes Sociales',
            'Panel de administración',
            'Formación'
          ],
          price: 750,
          link:''
        },
        {
          name:'Pack California',
          img:'/web/svg/california.svg',
          features:[
              'Los equipos compiten ',
              'Diferentes propuestas de diseño web',
              'Experiencia de usuario plus',
              'Esloganes y mensajes principales',
              'Efectos y animaciones avanzadas',
              'Creación de perfiles sociales',
              '50 fotos premium'
          ],
          price: 1500,
          link:''
        }
      ]
    }

  }

  render(){
    let select;
    if(this.props.info){
      select = this.state.packsWeb
    }else{
      select = this.state.packsEcommerce
    }
    return(
      <section className="ContainerPack h-70">
        {select.map((pack,index)=>{
          return(<Pack key={index} data={pack}></Pack>)
        })}
      </section>
    )
  }
}

export default AdapterPack;