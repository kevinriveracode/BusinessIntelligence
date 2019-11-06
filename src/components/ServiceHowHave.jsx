import React , {Component} from 'react'
import '../sass/ServiceHowHave.scss';
class ServiceHowHave extends Component{
  render(){
    return(
        <section className="ServiceHowHave">
          <div>
            <div className="title-section">
              <span>{this.props.section}</span>
              <h2>{this.props.sectiondes}</h2>
            </div>
            <div className="content-section">
              {this.props.items.map((item)=> {
                return(
                    <div>
                      <img src="" alt="image"/>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                );
              })}
            </div>
          </div>
        </section>
    )
  }
}

export default ServiceHowHave