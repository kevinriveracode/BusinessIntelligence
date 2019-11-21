import React , {Component} from 'react';
import '../sass/utils.scss';
class ItemInfo extends Component{
  render(){
    return(
        <div className="w-30 u-flex-col al-center">
          <img className={'img-responsive'} src={this.props.image} alt=""/>
          <h3>{this.props.name}</h3>
          <p className='pad-tex text-center'>{this.props.description}</p>
        </div>
    )
  }
}

export default ItemInfo;