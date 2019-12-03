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
          <a onClick={() => {
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/idea.svg" alt=""/>
                <p>Solamente es una idea</p>
              </div>
              </a>
              <a onClick={() => {
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/boceto.svg" alt=""/>
                <p>Boceto preparado</p>
              </div>
              </a>
              <a onClick={() => {
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/desarrollo.svg" alt=""/>
                <p>Web en desarrollo</p>
              </div>
              </a>
              <a onClick={() => {
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/produccion.svg" alt=""/>
                <p>Web lanzada</p>
              </div>
              </a>
             
          </div>
        </div>
    )
  }
  step_nine = () => {
    return (
        <div className="options">
          <h1>¿Tu web necesita servicios de SEO?</h1>
          <div>
          <a onClick={() => {
                  this.setState({answerQuestions:{questionNine: 1}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/seo.svg" alt=""/>
                <p>Si</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionNine: 2}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/no.svg" alt=""/>
                <p>No</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionNine: 3}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/nose.svg" alt=""/>
                <p>No lo sé</p>
              </div>
              </a>
          </div>
        </div>
    )
  }
  step_eight = () => {
    return (
        <div className="options">
          <h1>¿La Web necesita un directorio/buscador interno?</h1>
          <div>
          <a onClick={() => {
                  this.setState({answerQuestions:{questionEight: 1}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/busqueda.svg" alt=""/>
                <p>Si</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionEight: 2}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/no.svg" alt=""/>
                <p>No</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionEight: 3}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/nose.svg" alt=""/>
                <p>No lo sé</p>
              </div>
              </a>
          </div>
        </div>
    )
  }
  step_seven = () => {
    return (
        <div className="options">
          <h1>¿Va a ser una web multidioma?</h1>
          <div>
          <a onClick={() => {
                  this.setState({answerQuestions:{questionSeven: 1}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/idiomas.svg" alt=""/>
                <p>Si</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionSeven: 2}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/no.svg" alt=""/>
                <p>No</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionSeven: 3}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/nose.svg" alt=""/>
                <p>No lo sé</p>
              </div>
              </a>
          </div>
        </div>
    )
  }
  step_six = () => {
    return (
        <div className="options">
          <h1>¿Tu Web necesita login o registro de usuarios?</h1>
          <div>
          <a onClick={() => {
                  this.setState({answerQuestions:{questionSix: 1}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/login.svg" alt=""/>
                <p>Si</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionSix: 2}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/no.svg" alt=""/>
                <p>No</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionSix: 3}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/nose.svg" alt=""/>
                <p>No lo sé</p>
              </div>
              </a>


          </div>
        </div>
    )
  }
  step_five = () => {
    return (
        <div className="options">
          <h1>¿La Web estará integrada con otra Web, App o ERP?</h1>
          <div>
          <a onClick={() => {
                  this.setState({answerQuestions:{questionFive: 1}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/erp.svg" alt=""/>
                <p>Si</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionFive: 2}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/no.svg" alt=""/>
                <p>No</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionFive: 3}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/nose.svg" alt=""/>
                <p>No lo sé</p>
              </div>
              </a>

          </div>
        </div>
    )
  }
  step_four = () => {
    return (
        <div className="options">
          <h1>¿En tu web se van a realizar pagos?</h1>
          <div>
          <a onClick={() => {
                  this.setState({answerQuestions:{questionFour: 1}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/payment.svg" alt=""/>
                <p>Si</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionFour: 2}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/no.svg" alt=""/>
                <p>No</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionFour: 3}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/nose.svg" alt=""/>
                <p>No lo sé</p>
              </div>
              </a>
            
          </div>
        </div>
    )
  }
  step_three = () => {
    return (
        <div className="options">
          <h1>¿Cómo de grande necesitas que sea la web?</h1>
          <div>
          <a onClick={() => {
                  this.setState({answerQuestions:{questionThree: 1}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/3paso1.png" alt=""/>
                <p>Pequeña: menos de 3 páginas/50 productos</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionThree: 2}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/3paso2.png" alt=""/>
                <p>Mediana: menos de 10 páginas/200 productos</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionThree: 3}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/3paso3.png" alt=""/>
                <p>Grande: más de 10 páginas/200 productos</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionThree: 4}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/3paso4.png" alt=""/>
                <p>No lo sé</p>
              </div>
              </a>
          </div>
        </div>
    )
  }
  step_two = () => {
    return(
        <div className="options">
          <h1>¿Qué diseño quieres que tenga tu Web?</h1>
          <div>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionTwo: 1}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/plantilla.svg" alt=""/>
                <p>Usar una plantilla</p>
              </div>
              </a>
              <a onClick={() => {
                  this.setState({answerQuestions:{questionTwo: 2}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/personalizado.svg" alt=""/>
                <p>Diseño a medida</p>
              </div>
              </a>

              <a onClick={() => {
                  this.setState({answerQuestions:{questionTwo: 3}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/no.svg" alt=""/>
                <p>No necesito diseño</p>
              </div>
              </a>
           

              <a onClick={() => {
                  this.setState({answerQuestions:{questionTwo: 4}});
                  this.controller_step();
                }}>
              <div>
                <img src="/appCalculadoraWeb/nose.svg" alt=""/>
                <p>No lo sé</p>
              </div>
              </a>
          </div>
        </div>
    )
  }
  step_one = () => {
    return(
        <div className="options">
          <h1>¿Qué tipo de web estás buscando?</h1>
          <div>
            <a onClick={() => {
              this.setState({answerQuestions:{questionOne: 1}});
              this.controller_step();
            }}>
              <div>
                <img src="/appCalculadoraWeb/2paso1.svg" alt=""/>
                <p>E-commerce / Tienda Online</p>
              </div>
              </a>

            <a onClick={() => {
              this.setState({answerQuestions:{questionOne: 2}});
              this.controller_step();
            }}>
            <div>
              <img src="/appCalculadoraWeb/2paso2.svg" alt=""/>
              <p>Web con blog</p>
            </div>
            </a>

            <a onClick={() => {
              this.setState({answerQuestions:{questionOne: 3}});
              this.controller_step();
            }}>
              <div>
                <img src="/appCalculadoraWeb/2paso3.svg" alt=""/>
                <p>Web para empresa</p>
              </div>
              </a>

              <a onClick={() => {
              this.setState({answerQuestions:{questionOne: 4}});
              this.controller_step();
            }}>
              <div>
                <img src="/appCalculadoraWeb/2paso4.svg" alt=""/>
                <p>Web a medida</p>
              </div>
              </a>

            
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
        <div className="finalPrice">
          <h1>El coste estimado de tu web es:</h1>
          <h3>{total}€</h3>
          <a onClick={this.reset}>Volver a empezar</a>
        </div>
    )
  }
  reset=()=>{
    this.setState({step:1,count:0});
    
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