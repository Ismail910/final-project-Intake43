import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/login';
import Register from '../pages/register';

const MyRoutes = () => {
  const [currentForm,setCurrentForm]=useState('Login');

  const toggleForm=(formName)=>{
    setCurrentForm(formName);
  }
  return (
    <div className='App'>  
    {
      currentForm==="Login"? <Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
    }
      
    </div>
  )
}

export default MyRoutes;
