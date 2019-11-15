import React , {Component} from 'react';
import '../sass/ServiceWall.scss';
class ServiceWall extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return(
        <div className="ServiceWall">
          <div className="description">
            <h4>{this.props.category}</h4>
            <h1>{this.props.title}</h1>
            <ul>
              {this.props.features.map((feature) => <li>{feature}</li>)}
            </ul>
          </div>
          <div className="image">
            <img src="http://82.223.34.28/ecommerce-bg.png" alt=""/>
          </div>
        </div>
    )
  }
}

export default ServiceWall;
