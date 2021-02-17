import React from 'react';
import './assets/css/App.css';
import Router from './Router';

import AlertTemplate from "react-alert-template-basic";
import { useAlert } from "react-alert";
import { positions, Provider } from "react-alert";



function App() {
   

  return (
   
    <div className="App">
   
       <Router/>
   
    </div>
   
  );
}

export default App;
