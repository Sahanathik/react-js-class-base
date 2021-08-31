import React from 'react';
import './App.css';
import LoginForm from "./components/login";
import Product from "./components/product";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/register';
import ForgotPassword from './components/forgotpassword';
import ResetPassword from './components/resetpassword';

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <BrowserRouter>
     <div>
          <Switch>
             <Route path="/" component={LoginForm} exact/>
             <Route path="/register" component={Register}/>
             <Route path="/forgotpassword" component={ForgotPassword}/>
             <Route path="/resetpassword" component={ResetPassword}/>
             <Route path="/product" component={Product}/>
           </Switch>
      </div> 
      </BrowserRouter> 
    );
  }
}

export default App;