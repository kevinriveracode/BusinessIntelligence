import React , {Component} from 'react';
import '../sass/utils.scss';
class ItemInfo extends Component{
  render(){
    return(
        <div className="w-30 h-20 u-flex-col al-center">
          <img className={'img-responsive'} src={this.props.image} alt=""/>
          <h3 className='font-title-2'>{this.props.name}</h3>
          <p className='font-description text-center color-parrafo'>{this.props.description}</p>
        </div>
    )
  }
}

export default ItemInfo;