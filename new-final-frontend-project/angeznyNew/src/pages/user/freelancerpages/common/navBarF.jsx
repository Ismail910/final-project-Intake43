import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';

const NavBarF = () => {
    const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='/client'>Freelancer</MDBNavbarBrand>

      <MDBNavbarToggler
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setShowBasic(!showBasic)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>

      <MDBCollapse navbar show={showBasic}>
        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          {/* <MDBNavbarItem>
          <Link className="nav-link text-secondary " to="/freelancer">
            <i className="font-weight-bold"></i> <span className="ml-3">home</span>
          </Link>
          </MDBNavbarItem> */}
          <MDBNavbarItem>
          <Link className="nav-link text-secondary " to="/freelancer/task">
            <i className="font-weight-bold"></i> <span className="ml-3">task</span>
          </Link>
          </MDBNavbarItem>

          <MDBNavbarItem>
          <Link className="nav-link text-secondary " to="/freelancer/chat">
            <i className="font-weight-bold"></i> <span className="ml-3">chat</span>
          </Link>
          </MDBNavbarItem>

          <MDBNavbarItem>
          <Link className="nav-link text-secondary " to="/freelancer/payment">
            <i className="font-weight-bold"></i> <span className="ml-3">payment</span>
          </Link>
          </MDBNavbarItem>
{/*     
          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                Dropdown
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem> */}

          {/* <MDBNavbarItem>
            <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
              Disabled
            </MDBNavbarLink>
          </MDBNavbarItem> */}

        </MDBNavbarNav>

        {/* <form className='d-flex input-group w-auto'>
          <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
          <MDBBtn color='primary'>Search</MDBBtn>
        </form> */}
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
  )
}

export default NavBarF