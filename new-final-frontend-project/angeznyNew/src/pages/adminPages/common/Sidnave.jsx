import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleToggle}>
        <FontAwesomeIcon icon="fa-solid fa-toggle-on" />
      </Button>

      <Offcanvas show={showOffcanvas} onHide={handleToggle} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/product-owner">
                Product Owner
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/product-manager">
                Product Manager
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/developer">
                Developer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/freelancer">
                Freelancer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/client">
                Client
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/payment">
                Payment
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
