import React, {Component} from 'react';
import $ from 'jquery'
import '../sass/chat.scss';

class ChatBot extends Component {
  constructor(props){
    super(props);
    this.state = {
      state: 0,
      open :'conversacion.svg',
      close:'close.svg'
    }
  }
  openBox = () => {
    //Cambiar imagen
    if(this.state.state == 0){
      this.setState({state:1});
      $('.ChatBox').css('visibility','visible');
      return
    }
    if(this.state.state == 1){
      this.setState({state:0});
      $('.ChatBox').css('visibility','hidden');
      return
    }
  }
  renderBotton = () => {
    if(this.state.state == 0){
      return this.state.open
    }
    if(this.state.state == 1){
      return this.state.close
    }
  }
  render() {
    return (
        <React.Fragment>
          <div className="ChatBox">
            <div>
              <div>
                <img src="/bot.svg" alt=""/>
                <p>¿Tiene alguna pregunta? Estoy encantado de poder ayudarle?</p>
              </div>
            </div>
            <div className="inputChat">
              <input type="text" placeholder="Escriba un mensaje"/>
              <img  src="/send.svg" alt=""/>
            </div>
          </div>
          <div className="Chatbot">
              <img id="open" src={`/${this.renderBotton()}`} onClick={this.openBox} alt=""/>
          </div>
        </React.Fragment>
    );
  }
}

export default ChatBot;