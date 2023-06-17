import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import Payment from "../pages/adminPages/common/payment";
const MyRoutes = () => {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={
          <div className='App'>
          {currentForm === 'Login' ? (
            <Login onFormSwitch={toggleForm} />
          ) : (
            <Register onFormSwitch={toggleForm} />
          )}
              </div>
        } />
        <Route path='/payment' exact  element={< Payment />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
