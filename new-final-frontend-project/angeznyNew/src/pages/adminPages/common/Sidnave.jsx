import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Sidnave = () => {
  return (
    <Router>
    <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: '#2a52be' }}>
      <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3">
        <li className="nav-item mb-2 mt-3">
          <Link className="nav-link text-secondary text-light" to="/admin-dashboard">
            <h5>Admin Dashboard</h5>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-secondary text-light" to="/product-owner">
            <i className="font-weight-bold"></i> <span className="ml-3">Product Owner</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-secondary text-light" to="/product-manager">
            <i className="fas fa-user font-weight-bold"></i> <span className="ml-3">Product Manager</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-secondary text-light" to="/developer">
            <span className="ml-3">Developer</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-secondary text-light" to="/freelancer">
            <span className="ml-3">Freelancer</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-secondary text-light" to="/client">
            <span className="ml-3">Client</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-secondary text-light" to="/payment">
            <span className="ml-3">Payment</span>
          </Link>
        </li>
      </ul>
    </div>
    </Router>
  );
};

export default Sidnave;