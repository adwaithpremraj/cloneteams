import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
        <div className="d-flex justify-content-between">
            <div className=''>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
              <img src="src\assets\teams.png" 
                    className='topimg mt-1 me-1 ms-5'
                    alt="no image" 
                    height="20px" 
                     />
                <Navbar.Brand href="#home">Microsoft</Navbar.Brand>
                <p className='mt-3 microvbar'><b>|</b></p>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home" className='fontsizeteams'><b>Teams</b></Nav.Link>
                        <NavDropdown title="Products" className="fontsizetext" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="features" className="fontsizetext" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#home" style={{fontSize: "14px"}}>Pricing</Nav.Link>


                        <NavDropdown title="Industries" className="fontsizetext" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Resources" className="fontsizetext" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#home" style={{fontSize: "14px"}}>Support</Nav.Link>


                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            
            </div>
            <div className='me-5 p-3 rightend'>
                <a href="" className='Downloaded'>Downloaded Teams</a>
                <button className="btn ms-3 border-primary btn-sm ms-3">Sign in</button>
            </div>
        </div>



        <div className="row navblue">
          <div className="col-7  pe-0" >
            <p className='parahead'>Level up your retail workforce with AI-powered technology.</p>
          </div>
          <div className="col-4 parahead2" >
            <p>Read the blog<FontAwesomeIcon icon={faChevronRight}  className="ms-1" /></p>
          </div>
          <div className="col-1"></div>

        </div>


        {/* <div className=' row navblue  p-2' >
            <div className="col-lg-2"></div>
            <div className='col-lg-4 ms-5 mt-3 col-sm-6 '>
              <p className='lg-ms-5 '>Level up your retail workforce with AI-powered technology
              </p>
            </div>
            <div className='col-lg-4 col-sm-6 bg-dark ps-1'>
</div>

            <div className="col-lg-2 "></div>


        </div> */}
        </>
  )
}

export default Header