import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NavBarC from '../clientPages/common/navBarC';
import NavBarD from '../developerPages/common/navBarD';
import NavBarF from '../freelancerpages/common/navBarF';
import NavBarM from '../productManagerpages/common/navBarM';
import NavBarO from '../productOwnerPages/common/navBarO';
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

const Header = () => {
    const [showBasic, setShowBasic] = useState(false);
  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <Link className="nav-link text-secondary " to="/">Brand
          </Link>

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
              <MDBNavbarItem>
              <Link className="nav-link text-secondary " to="/">
                <i className="font-weight-bold"></i> <span className="ml-3">home</span>
              </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link className="nav-link text-secondary " to="/contactUs">
                <i className="font-weight-bold"></i> <span className="ml-3">Countact Us</span>
              </Link>
              </MDBNavbarItem>

              <MDBNavbarItem>
              <Link className="nav-link text-secondary " to="/aboutUs">
                <i className="font-weight-bold"></i> <span className="ml-3">About Us</span>
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

            <Link className="nav-link text-secondary " to="/login">
              <MDBBtn color='primary'>login</MDBBtn>
            </Link>
            <Link className="nav-link text-secondary " to="/">
              <MDBBtn color='primary'>logout</MDBBtn>
            </Link>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div>
        <NavBarC/>
        <NavBarD/>
        <NavBarF/>
        <NavBarM/>
        <NavBarO/>
      </div>
    </>

  )
}

export default Header