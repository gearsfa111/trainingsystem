import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './view/authentication/signin/Signin';
import Singup from './view/authentication/signup/Signup';

class App extends React.Component {

  render() {
    return (
      <Singup />
    );
  }
}

export default App;
