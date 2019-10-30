import React , {Component} from 'react';
import '../sass/app.scss'
class AppCalculatePrice extends  Component{
  constructor(props){
    super(props);
    this.state = {
      step: 0,
      answerQuestions:{
        questionOne: '',
        questionTwo: '',
        questionThree:'',
        questionFour:'',
        questionFive:'',
        questionSix: '',
        questionSeven:'',
        questionEight:'',
        questionNine:'',
      },
      finalPrice: '',
      count: 0
    }
  }
  step_ten = () => {
    return (
        <div className="options">
          <h1>¿En qué estado se encuentra tu web?</h1>
          <div>
            <button onClick={() => {
              this.setState({answerQuestions:{ questionNine: 'idea'}});
              this.controller_step();
            }}>Solamente es una idea</button>

            <button onClick={() => {
              this.setState({answerQuestions:{ questionNine: 'boceto'}});
              this.controller_step();
            }}>Boceto preparado</button>

            <button onClick={() => {
              this.setState({answerQuestions:{ questionNine: 'desarrollo'}});
              this.controller_step();
            }}>Web en desarrollo</button>

            <button onClick={() => {
              this.setState({answerQuestions:{ questionNine: 'produccion'}});
              this.controller_step();
            }}>Web lanzada</button>
          </div>
        </div>
    )
  }
  step_nine = () => {
    return (
        <div className="options">
          <h1>¿Tu web necesita servicios de SEO?</h1>
          <div>
            <button onClick={() => {
              this.setState({answerQuestions:{ questionNine: 'si'}});
              this.controller_step();
            }}>Si</button>

            <button onClick={() => {
              this.setState({answerQuestions:{ questionNine: 'no'}});
              this.controller_step();
            }}>No</button>

            <button onClick={() => {
              this.setState({answerQuestions:{ questionNine: 'nose'}});
              this.controller_step();
            }}>No lo sé</button>
          </div>
        </div>
    )
  }
  step_eight = () => {
    return (
        <div className="options">
          <h1>¿La Web necesita un directorio/buscador interno?</h1>
          <div>
            <button onClick={() => {
              this.setState({answerQuestions:{questionEight: 'si'}});
              this.controller_step();
            }}>Si</button>

            <button onClick={() => {
              this.setState({answerQuestions:{ questionEight: 'no'}});
              this.controller_step();
            }}>No</button>

            <button onClick={() => {
              this.setState({answerQuestions:{ questionEight: 'nose'}});
              this.controller_step();
            }}>No lo sé</button>
          </div>
        </div>
    )
  }
  step_seven = () => {
    return (
        <div className="options">
          <h1>¿Va a ser una web multidioma?</h1>
          <div>
            <button onClick={() => {
              this.setState({answerQuestions:{ questionSeven: 'si'}});
              this.controller_step();
            }}>Si</button>

            <button onClick={() => {
              this.setState({answerQuestions:{ questionSeven: 'no'}});
              this.controller_step();
            }}>No</button>

            <button onClick={() => {
              this.setState({answerQuestions:{ questionSeven: 'nose'}});
              this.controller_step();
            }}>No lo sé</button>
          </div>
        </div>
    )
  }
  step_six = () => {
    return (
        <div className="options">
          <h1>¿Tu Web necesita login o registro de usuarios?</h1>
          <div>
            <button onClick={() => {
              this.setState({answerQuestions:{ questionSix: 1}});
              this.controller_step();
            }}>Si</button>

            <button onClick={() => {
              this.setState({answerQuestions:{ questionSix: 2}});
              this.controller_step();
            }}>No</button>

            <button onClick={() => {
              this.setState({answerQuestions:{ questionSix: 3}});
              this.controller_step();
            }}>No lo sé</button>

          </div>
        </div>
    )
  }
  step_five = () => {
    return (
        <div className="options">
          <h1>¿La Web estará integrada con otra Web, App o ERP?</h1>
          <div>
            <button onClick={() => {
              this.setState({answerQuestions:{ questionFive: 1}});
              this.controller_step();
            }}>Si</button>

            <button onClick={() => {
              this.setState({answerQuestions:{ questionFive: 2}});
              this.controller_step();
            }}>No</button>

            <button onClick={() => {
              this.setState({answerQuestions:{ questionFive: 3}});
              this.controller_step();
            }}>No lo sé</button>

          </div>
        </div>
    )
  }
  step_four = () => {
    return (
        <div className="options">
          <h1>¿En tu web se van a realizar pagos?</h1>
          <div>
            <button onClick={() => {
              this.setState({answerQuestions:{questionFour: 1}});
              this.controller_step();
            }}>Si</button>

            <button onClick={() => {
              this.setState({answerQuestions:{questionFour: 2}});
              this.controller_step();
            }}>No</button>

            <button onClick={() => {
              this.setState({answerQuestions:{questionFour: 3}});
              this.controller_step();
            }}>No lo sé</button>
          </div>
        </div>
    )
  }
  step_three = () => {
    return (
        <div className="options">
          <h1>¿Cómo de grande necesitas que sea la web?</h1>
          <div>
            <button onClick={() => {
              this.setState({answerQuestions:{questionThree:1}});
              this.controller_step();
            }}>Pequeña: menos de 3 páginas/50 productos</button>

            <button onClick={() => {
              this.setState({answerQuestions:{questionThree: 2}});
              this.controller_step();
            }}>Mediana: menos de 10 páginas/200 productos</button>

            <button onClick={() => {
              this.setState({answerQuestions:{questionThree: 3}});
              this.controller_step();
            }}>Grande: más de 10 páginas/200 productos</button>

            <button onClick={() => {
              this.setState({answerQuestions:{questionThree: 4}});
              this.controller_step();
            }}>No lo sé</button>
          </div>
        </div>
    )
  }
  step_two = () => {
    return(
        <div className="options">
          <h1>¿Qué diseño quieres que tenga tu Web?</h1>
          <div>
            <button onClick={() => {
              this.setState({answerQuestions:{questionTwo: 1}});
              this.controller_step();
            }}>Usar una plantilla</button>

            <button onClick={() => {
              this.setState({answerQuestions:{questionTwo:2}});
              this.controller_step();
            }}>Diseño a medida</button>

            <button onClick={() => {
              this.setState({answerQuestions:{questionTwo:3}});
              this.controller_step();
            }}>No necesito diseño</button>

            <button onClick={() => {
              this.setState({answerQuestions:{questionTwo: 4}});
              this.controller_step();
            }}>No lo sé</button>
          </div>
        </div>
    )
  }
  step_one = () => {
    return(
        <div className="options">
          <h1>¿Qué tipo de web estás buscando?</h1>
          <div>
            <button onClick={() => {
              this.setState({answerQuestions:{questionOne: 1}});
              this.controller_step();
            }}>E-commerce / Tienda Online</button>
            <button onClick={() => {
              this.setState({answerQuestions:{questionOne: 2}});
              this.controller_step();
            }}>Web con blog</button>
            <button onClick={() => {
              this.setState({answerQuestions:{questionOne: 3}});
              this.controller_step();
            }}>Web para empresa/corporativa</button>
            <button onClick={() => {
              this.setState({answerQuestions:{questionOne: 4}});
              this.controller_step();
            }}>Web a medida</button>
          </div>
        </div>
    )
  };
  welcomeStep = () => {
    return(
        <div className="welcomeApp">
          <h1>¿Cuánto cuesta crear tu página o sitio web?</h1>
          <p>Calcula el coste para crear tu página web de manera sencilla. Obtén un presupuesto aproximado para la creación de tu sitio web.</p>
          <button onClick={this.controller_step}>CALCULAR COSTE</button>
        </div>
    );
  }
  calculate = () => {
    //Q1
    if(this.state.answerQuestions.questionOne === 1) this.setState({count: this.state.count + 350}); //ecommerce
    if(this.state.answerQuestions.questionOne === 2) this.setState({count: this.state.count + 300}); //blog
    if(this.state.answerQuestions.questionOne === 3) this.setState({count: this.state.count + 300}); //empresa
    if(this.state.answerQuestions.questionOne === 4) this.setState({count: this.state.count + 750}); //a medida
    //Q2
    if(this.state.answerQuestions.questionTwo === 1) this.setState({count: this.state.count + 35}); //plantilla
    if(this.state.answerQuestions.questionTwo === 2) this.setState({count: this.state.count + 175}); //a medida
    if(this.state.answerQuestions.questionTwo === 3) this.setState({count: this.state.count + 0}); //no
    if(this.state.answerQuestions.questionTwo === 4) this.setState({count: this.state.count + 83}); //no sabe
    //Q3
    if(this.state.answerQuestions.questionThree === 1) this.setState({count: this.state.count + 0}); //pequeña
    if(this.state.answerQuestions.questionThree === 2) this.setState({count: this.state.count + 175}); //mediana
    if(this.state.answerQuestions.questionThree === 3) this.setState({count: this.state.count + 725}); //grande
    if(this.state.answerQuestions.questionThree === 4) this.setState({count: this.state.count + 350}); //no sabe
    return this.state.count;
    //Q4
    if(this.state.answerQuestions.questionFour === 1) this.setState({count: this.state.count + 70}); // si
    if(this.state.answerQuestions.questionFour === 2) this.setState({count: this.state.count + 0}); //no
    if(this.state.answerQuestions.questionFour === 3) this.setState({count: this.state.count + 35}); //nose
    return this.state.count;
    //Q5
    if(this.state.answerQuestions.questionFive === 1) this.setState({count: this.state.count + 175}); //si
    if(this.state.answerQuestions.questionFive === 2) this.setState({count: this.state.count + 0}); //nose
    if(this.state.answerQuestions.questionFive === 3) this.setState({count: this.state.count + 78}); //nose
    return this.state.count;
    //Q6
    if(this.state.answerQuestions.questionSix === 1) this.setState({count: this.state.count + 52}); //si
    if(this.state.answerQuestions.questionSix === 2) this.setState({count: this.state.count + 0}); //no
    if(this.state.answerQuestions.questionSix === 3) this.setState({count: this.state.count + 25}); //nose
    return this.state.count;
    //Q7
    if(this.state.answerQuestions.questionSeven === 1) this.setState({count: this.state.count + 52}); //si
    if(this.state.answerQuestions.questionSeven === 2) this.setState({count: this.state.count + 0}); //no
    if(this.state.answerQuestions.questionSeven === 3) this.setState({count: this.state.count + 25}); //nose
    return this.state.count;
    //Q8
    if(this.state.answerQuestions.questionEight=== 1) this.setState({count: this.state.count + 75}); //si
    if(this.state.answerQuestions.questionEight === 2) this.setState({count: this.state.count + 0}); //no
    if(this.state.answerQuestions.questionEight === 3) this.setState({count: this.state.count + 42}); //nose
    return this.state.count;
    //Q9
    if(this.state.answerQuestions.questionNine === 1) this.setState({count: this.state.count + 88}); //si
    if(this.state.answerQuestions.questionNine === 2) this.setState({count: this.state.count + 0}); //no
    if(this.state.answerQuestions.questionNine === 3) this.setState({count: this.state.count + 35}); //nose
    return this.state.count;
  }
  presupuestoFinal = () => {
    let total = this.calculate()
    return(
        <div>
          <h1>El coste estimado de tu web es</h1>
          <h3>{total}€</h3>
        </div>
    )
  }
  controller = () => {
    let step = this.state.step;
    if(step == 0){
      return this.welcomeStep();
    }
    if(step == 1){
      return this.step_one();
    }
    if(step == 2){
      return this.step_two();
    }
    if(step == 3){
      return this.step_three();
    }
    if(step == 4){
      return this.step_four();
    }
    if(step == 5){
      return this.step_five();
    }
    if(step == 6){
      return this.step_six();
    }
    if(step == 7){
      return this.step_seven();
    }
    if(step == 8){
      return this.step_eight();
    }
    if(step == 9){
      return this.step_nine();
    }
    if(step == 10){
      return this.step_ten();
    }
    if(step == 11){
      return this.presupuestoFinal();
    }
  }
  controller_step = () => {
    if(this.state.step > 0 ){
      this.calculate()
    }
    let stepNow = this.state.step;
    this.setState({step: stepNow +1})

  }
  render(){
    return(
        <div className="AppCalculate">
          {this.controller()}
        </div>
    )
  }
}

export default AppCalculatePrice