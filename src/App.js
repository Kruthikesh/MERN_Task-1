import './App.css';
import React, { Component }  from 'react';
import {Routes,Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Crud from "./crud";
import "react-toastify/dist/ReactToastify.css"  
import { BrowserRouter } from 'react-router-dom';
import Update from './crud/Update';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route exact path="/" element={<Crud/>}/>
        <Route exact path="/update/:id" element={<Update/>}/>

      </Routes>
    </div>
  );
}

export default App;
