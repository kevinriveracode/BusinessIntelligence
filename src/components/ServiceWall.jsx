import React , {Component} from 'react';
import '../sass/ServiceWall.scss';
import '../sass/utils.scss';

import ButtonBI from './button';
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
            <img src="/ecommerce-bg.png" alt=""/>
          </div>
          <div className='u-flex jc-between w-100 '>
            <div className="pad-1">
              <ButtonBI/>
            </div>
            <div className="pad-1">
              <ButtonBI/>
            </div>
          </div>

        </div>
    )
  }
}

export default ServiceWall;
