import React , {Component} from 'react';
import '../sass/title-section.scss';
class TitleSection extends Component{
  render(){
    return(
        <div className="title-section">
          <div>
            <h1>{this.props.title}</h1>
            <h3>{this.props.subtitle}</h3>
          </div>
        </div>
    )
  }
}
export default TitleSection