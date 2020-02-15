import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './view/authentication/signin/Signin';
import Singup from './view/authentication/signup/Signup';
import Sidebar from './view/layout/layout-component/Sidebar';
import Navbar from './view/layout/layout-component/Navbar';


class App extends React.Component {

  render() {
    return (
      <Navbar />
    );
  }
}

export default App;
