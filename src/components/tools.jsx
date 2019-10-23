import React , {Component} from 'react';
import '../sass/tools.scss'
class Tools extends Component{
  constructor(props){
    super(props);
    this.state = {
      tecnologias: [
          'trello','phpstorm','node','prestashop','shopify','react','adobe','semrush'
      ]
    }
  }
  render(){
    return(
        <section className="tools">
          <div className="tools-title">
            <h1>Herramientas que usamos</h1>
            <h3>
              Trabajamos en el dia a dia con herramientas líderes en el mercado que nos permiten gestionar nuestro trabajo de forma efectiva para crear soluciones innovadoras,
              manteniendo un flujo de comunicacion ágil entre nuestros cliente y equipo de trabajo.
            </h3>
          </div>
          <div className="tools-items">
            {this.state.tecnologias.map((tech)=>(
                <div className="box-tool">
                  <img className="logo-technology" src={'/'+tech+'.png'} alt=""/>
                </div>
            ))}
          </div>
        </section>
    )
  }
}

export default Tools