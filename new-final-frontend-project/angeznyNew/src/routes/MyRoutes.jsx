import React, { Suspense, useState } from 'react';
import { BrowserRouter , Switch, Routes, Route ,useRoutes  } from 'react-router-dom';
import { CircleSpinner, WaveSpinner } from "react-spinners-kit";


// imports all pages
import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/user/home';
import Chat from '../components/chat/chat';
import Payment from '../pages/user/common/payment';
import ContactUs from '../components/ContactUs';
import AboutUs from '../components/AboutUs';


import ClientProject from '../pages/user/clientPages/clientProject';

import DeveloperTask from '../pages/user/developerPages/task'

import FreelancerTask from '../pages/user/freelancerpages/task'

import Managerproject from '../pages/user/productManagerpages/Managerproject';
import ManagerTask from '../pages/user/productManagerpages/tasks'

import OwnerProject from '../pages/user/productOwnerPages/OwnerProject';

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
import NavBarD from '../pages/user/developerPages/common/navBarD';
import NavBarF from '../pages/user/freelancerpages/common/navBarF';
import NavBarM from '../pages/user/productManagerpages/common/navBarM';
import NavBarO from '../pages/user/productOwnerPages/common/navBarO';
import Header from '../pages/user/common/header';
import NotFound from '../components/NotFound';

const MyRoutes = () => {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (

    <BrowserRouter>
        <Routes>
        <Route
            path="/"
            exact
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <Home />
                <Footer />
              </Suspense>
            }
          />
           <Route
            path="/contactUs"
            exact
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <ContactUs/>
                <Footer />
              </Suspense>
            }
          />
          <Route
            path="/aboutUs"
            exact
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <AboutUs />
                <Footer />
              </Suspense>
            }
          />

          {/* login and register */}
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

          {/* Admin Routes */}
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
                <div className='row w-100'>
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
                  <div className="grid place-items-center  bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <div className='row w-100'>
                <AdminSidnave className ="col-2"   />
                <AdminOwner className = "col-8" />
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
                <div className='row w-100'>
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
                <div className='row w-100'>
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
                <div className='row w-100'>
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
                <div className='row w-100'>
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
                <div className='row w-100'>
                <AdminSidnave className ="col-2"  style={{}} />
                <AdminClient className = "col-10" />
                </div>

              </Suspense>
            }
          />

          {/* </Route> */}

          {/* Client */}
          {/* <Route element={<clientGuard />}> */}
          <Route
            path="/client/"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarC  />
                <Home />
                <Footer/>

              </Suspense>
            }
          />
          <Route
            path="/client/project"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarC  />
                <ClientProject />
                <Footer/>

              </Suspense>
            }
          />
            <Route
            path="/client/chat"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarC  />
                <Chat />
                <Footer/>

              </Suspense>
            }
          />

            <Route
            path="/client/payment"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarC />
                <Payment />
                <Footer/>

              </Suspense>
            }
          />
          {/* </Route> */}

          {/* developer routes */}
          {/* <Route element={<DeveloperGuard />}> */}
          <Route
            path="/developer/"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarD  />
                <Home />
                <Footer/>

              </Suspense>
            }
          />
          <Route
            path="/developer/task"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarD  />
                <DeveloperTask />
                <Footer/>

              </Suspense>
            }
          />
            <Route
            path="/developer/chat"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarD  />
                <Chat />
                <Footer/>

              </Suspense>
            }
          />

          {/* </Route> */}

          {/* freelancer routes */}
          {/* <Route element={<FreelancerGuard />}> */}
          <Route
            path="/freelancer/"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarF/>
                <Home/>
                <Footer/>
              </Suspense>
            }
          />
          <Route
            path="/freelancer/task"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarF  />
                <FreelancerTask />
                <Footer/>

              </Suspense>
            }
          />
            <Route
            path="/freelancer/chat"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarF  />
                <Chat />
                <Footer/>

              </Suspense>
            }
          />

            <Route
            path="/freelancer/payment"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarF />
                <Payment />
                <Footer/>

              </Suspense>
            }
          />
           {/* </Route> */}
                     {/* manager routes */}
          {/* <Route element={<ProductManagerGuard />}> */}
          <Route
            path="manager/"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarM  />
                <Home />
                <Footer/>
              </Suspense>
            }
          />
          <Route
            path="/manager/task"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarM  />
                <ManagerTask />
                <Footer/>
              </Suspense>
            }
          />
            <Route
            path="/manager/chat"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarM  />
                <Chat />
                <Footer/>
              </Suspense>
            }
          />

            <Route
            path="/manager/project"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarM  />
                <Managerproject />
                <Footer/>
              </Suspense>
            }
          />

          {/* </Route> */}

         {/* Owner routes */}
          <Route element={<ProductOwnerGuard />}>
          <Route
            path="owner/"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarO/>
                <Home/>
                <Footer/>
              </Suspense>
            }
          />
            <Route
            path="/owner/chat"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarO  />
                <Chat />
                <Footer/>

              </Suspense>
            }
          />

            <Route
            path="/owner/project"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarO  />
                <OwnerProject/>
                <Footer/>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense
                fallback={
                  <div className="grid place-items-center h-screen bg-black">
                    <CircleSpinner size={60} />
                  </div>
                }
              >
                <Header/>
                <NavBarO  />
                <NotFound/>
                <Footer/>
              </Suspense>
            }
          />

          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
