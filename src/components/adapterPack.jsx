import React , {Component} from 'react';
import ButtonBI from './button';

class Pack extends Component{
  render(){
    return(
        <section>
          <div>
            <h2>{this.props.data.name}</h2>
            <img src={this.props.data.img} alt="Imagen del pack"/>
            <p>{this.props.data.descripcion}</p>
            <ul>
              {this.props.data.features.map((feature,index)=>{
                return(<li key={index}>{feature}</li>)
              })}
            </ul>
            <h4>{this.props.data.price}</h4>
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
          img:'',
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
          img:'',
          features:['Caracteristica 1', 'Caracteristica 2'],
          price: 299,
          link:''
        },
        {
          name:'Pack Berlin',
          img:'',
          features:['Caracteristica 1', 'Caracteristica 2'],
          price: 299,
          link:''
        },
        {
          name:'Pack California',
          img:'',
          features:['Caracteristica 1', 'Caracteristica 2'],
          price: 299,
          link:''
        }
      ]
    }
  }
  render(){
    return(
      <section>
        {this.state.packsWeb.map((pack,index)=>{
          return(<Pack key={index} data={pack}></Pack>)
        })}
      </section>
    )
  }
}

export default AdapterPack;