import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import LoggedInGuard from '../guard/LoggedInRoutes';
const MyRoutes = () => {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <Router>
      <Routes>
      <Route element={<LoggedInGuard />}>
        <Route path="/login" element={
          <div className='App'>
          {currentForm === 'Login' ? (
            <Login onFormSwitch={toggleForm} />
          ) : (
            <Register onFormSwitch={toggleForm} />
          )}
              </div>
        } />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
