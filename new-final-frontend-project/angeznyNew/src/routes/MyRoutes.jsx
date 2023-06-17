import React, { Suspense, useState } from 'react';
import { BrowserRouter , Switch, Routes, Route ,useRoutes  } from 'react-router-dom';
import { CircleSpinner, WaveSpinner } from "react-spinners-kit";


// imports all pages
import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/user/home';

import Chat from '../components/chat/chat';
import ClientProject from '../pages/user/clientPages/clientProject';

import AdminClient  from '../pages/adminPages/common/client'
import AdminDash from '../pages/adminPages/common/Dashboard'
import AdminSidnave from '../pages/adminPages/common/Sidnave'
import AdminFreelancer from '../pages/adminPages/common/freelancer'
import AdminDeveloper from '../pages/adminPages/common/developer'
import AdminPayment from '../pages/adminPages/common/payment'
import AdminManager from '../pages/adminPages/common/product_manger'
import AdminOwner from '../pages/adminPages/common/product_owner'

// imports all guards
import LoggedInGuard from '../guard/LoggedInRoutes'
import AdminGuard from '../guard/AdminGuard'
import clientGuard from '../guard/ClientGuard'
import FreelancerGuard from '../guard/FreelancerGuard'
import DeveloperGuard from '../guard/DeveloperGuard'
import ProductOwnerGuard from '../guard/ProductOwnerGuard'
import ProductManagerGuard from '../guard/ProductManagerGuard'

//imports all components
import Footer from '../pages/user/common/footer'
import NavBarC from '../pages/user/clientPages/common/navBarC';

const MyRoutes = () => {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <BrowserRouter>
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
          {/* <Route element={<LoggedInGuard />}> */}
          <Route
            path="/admin/"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <div className='row'>
                <AdminSidnave className ="col-2" />
                <AdminDash className = "col-8" />
                </div>

              </Suspense>
            }
          />
            <Route
            path="/admin/product-owner"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <div className='row'>
                <AdminSidnave className ="col-2"  style={{}} />
                <AdminOwner className = "col-10" />
                </div>

              </Suspense>
            }
          />
          <Route
            path="/admin/product-manager"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <div className='row'>
                <AdminSidnave className ="col-2"  style={{}} />
                <AdminManager className = "col-10" />
                </div>

              </Suspense>
            }
          />
            <Route
            path="/admin/developer"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <div className='row'>
                <AdminSidnave className ="col-2"  style={{}} />
                <AdminDeveloper className = "col-10" />
                </div>

              </Suspense>
            }
          />
                      <Route
            path="/admin/freelancer"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <div className='row'>
                <AdminSidnave className ="col-2"  style={{}} />
                <AdminFreelancer className = "col-10" />
                </div>

              </Suspense>
            }
          />

            <Route
            path="/admin/payment"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <div className='row'>
                <AdminSidnave className ="col-2"  style={{}} />
                <AdminPayment className = "col-10" />
                </div>

              </Suspense>
            }
          />
                                <Route
            path="/admin/client"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <div className='row'>
                <AdminSidnave className ="col-2"  style={{}} />
                <AdminClient className = "col-10" />
                </div>

              </Suspense>
            }
          />

          {/* </Route> */}
        </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
