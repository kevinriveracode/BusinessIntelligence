import React , {Component} from 'react';
import '../sass/utils.scss';
class ItemInfo extends Component{
  render(){
    return(
        <div className="w-30 u-flex-col ">
          <img className={'img-responsive'} src={this.props.image} alt=""/>
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
        </div>
    )
  }
}

export default ItemInfo;