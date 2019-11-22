import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './views/home';
import TiendaOnline from './views/TiendaOnline';
import DiseñoWeb from './views/DiseñoWeb';
import BackOffice  from './views/backoffice/backoffice';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home}/>
        <Route path='/service/ecommerce' exact component={TiendaOnline} />
        <Route path='/service/web' exact component={DiseñoWeb} />
        <Route path='/userpanel' exact component={BackOffice} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
