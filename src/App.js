import React from 'react';
import './App.css';



import {

  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Formvalidation from './components/login/loginpage';
import Registration from './components/registration/registartion';
import Home from './components/home/home';

function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route exact path='/'><Registration /></Route>
        <Route exact path='/login'><Formvalidation /></Route>
        <Route exact path='/home'><Home/></Route>
        <Home/>
      </Switch>
    </BrowserRouter>




  );
}
export default App


{/* <Link to='/'>registration</Link>{'|'}
      <Link to='/about'>Formvalidation</Link>{'|'}
      <Link to='/home'>Home</Link>{'|'} */}



// import {

//   BrowserRouter,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
/* <BrowserRouter>

<Link to='/'>Home</Link>{'|'}

<Switch>
  <Route exact path='/'><signUp/></Route>

</Switch>

</BrowserRouter> */