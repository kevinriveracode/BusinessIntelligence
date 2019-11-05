import React , {Component} from 'react'
import '../../sass/aplicationbudget.scss';

class AplicationBudget extends Component{
    constructor(props){
        super(props);
        this.state = {
            stepRendered:0,
            start:false
        }
    }
    MensajeDeBienvenida = () => {
        return(
            <div>
                <h1>¿Cuanto cuesta crear tu pagina o sitio web?</h1>
                <p>Calcula el coste para crear tu pagina web de manera sencilla.Obtén un presupuesto aproximado para la creacion de tu sitio web.</p>
                <button onClick={this.secondStape}>Empezar</button>
            </div>
        );
    }
    secondStape = () => {
        return(
            <div>
                <h1>¿Cuanto cuesta crear tu pagina o sitio web?</h1>
                <p>Calcula el coste para crear tu pagina web de manera sencilla.Obtén un presupuesto aproximado para la creacion de tu sitio web.</p>
                
            </div>
        );
    }
    controllerSteps = (nextStep) => {
       if(this.state.stepRendered==1){
            return this.secondStape();
       }
       if(this.state.stepRendered === 0){
            return this.initApp();
       }
    }
    startApp = () => {
        console.log('start process')
        this.setState({start:true});
        this.setState({stepRendered: 1})
        
    }
    render(){
        return(
            <div className="AplicationBudger">
                Primera version de la aplicacion
                {this.controllerSteps()}
            </div>
        )
    }
}

export default AplicationBudget