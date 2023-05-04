import React from 'react';
import './App.css';
// import Home from './components/Home/Home';
import Login from './components/Login/Login';

import {

  BrowserRouter,
  Switch,
  Route,
  // Link,
  // Router
} from "react-router-dom";
import Registartion from './components/Registration/Registartion';

import Home from './components/Home/Home';
import ListPage from './ListPage/ListPage';
import SinglePage from './components/SinglePage/SinglePage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
      
      <Route exact path='/'><Registartion/></Route>
      <Route exact path='/Login'><Login/></Route>
      <Route exact path='/Home'><Home/></Route>
      <Route exact path='/ListPage'><ListPage/></Route>
      <Route exact path='/SinglePage'><SinglePage/></Route>
     
      </Switch>
    </BrowserRouter>

  );
}
export default App
