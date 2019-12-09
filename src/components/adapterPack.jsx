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
              <h2>{this.props.data.name}</h2>
              <span>{this.props.data.price}€</span>
            </div>
            <img className="Packimg" src={this.props.data.img} />
            <p>{this.props.data.descripcion}</p>
            <ul className="no-list">
              {this.props.data.features.map((feature,index)=>{
                return(<li key={index}><img className={'tick'} src={"/tick.svg"}></img>{feature}</li>)
              })}
            </ul>
            {/*<h4>{this.props.data.price}</h4>*/}
            {/*
              Todo: Seria interesante en un futuro poder maquetar un boton para
              redireccionar a una demos con las carecteristicas que ofrecemos.
              //Revisar la oferta de marketing para vender varias cosas
              y manipular al cliente para que compre el mas caro.
            */}
            <ButtonBI name="Comprar"></ButtonBI>
          </div>
        </section>
    )
  }
}

class AdapterPack extends Component{
  constructor(props){
    super(props)
    this.state = {
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
    return(
      <section className="ContainerPack h-70">
        {this.state.packsWeb.map((pack,index)=>{
          return(<Pack key={index} data={pack}></Pack>)
        })}
      </section>
    )
  }
}

export default AdapterPack;