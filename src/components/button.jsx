import React , {Component} from 'react';
import '../sass/button.scss';
class ButtonBI extends Component{
  render(){
    return(
       <button className="Button">{this.props.name}</button>
    )
  }
}

export default ButtonBI;