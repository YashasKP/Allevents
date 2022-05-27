import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import BasicDetails from './components/BasicDetails';
import LoginForm from './components/LoginForm';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        
        <Routes>
          <Route path="/" element = {<LoginForm/>} />
          <Route path = '/details' element = {<BasicDetails/>} /> 
        </Routes>
      </div>
    );
  }
}

export default App;
