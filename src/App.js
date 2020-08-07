import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//npm install react-router-dom --save

import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import TiendasPage from './pages/TiendasPage';
import TiendasFormPage from './pages/TiendasFormPage';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path ="/welcome" component={WelcomePage}></Route>
        <Route exact path ="/tiendas" component={TiendasPage}></Route>
        <Route exact path = "/tiendasForm" component= {TiendasFormPage}></Route>
        <Route exact path = "/" component ={HomePage}></Route>
      </Switch>
    </Router>
  )
}

export default App;
