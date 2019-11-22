import React , {Component} from 'react';
import '../sass/ServiceTechnology.scss';
import $ from 'jquery';
class ServiceTechnology extends Component{
  constructor(...props){
    super(...props);
    this.state = {
      extraClass:''
    }
  }
  render(){

    return(
        <section className={`ServiceTechnology   ${this.props.view}`}>
          <div className="image">
            <img src={this.props.image} alt=""/>
          </div>
          <div className="text">
            <span><b>E-commerce</b></span>
            <h2 className="title-text-mobile">{this.props.name}</h2>
            <img className="title-mobile" src={this.props.image} alt=""/>
            <p>
              {this.props.description}
            </p>
            <h5><b>Caracteristicas principales del CMS:</b></h5>
            <ul>

            </ul>
          </div>
        </section>
    )
  }
}

export default ServiceTechnology;