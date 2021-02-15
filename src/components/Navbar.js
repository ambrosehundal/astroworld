import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";

import Mars from './Mars'

class Header extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">Astroworld</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">News</Nav.Link>
                                    <Nav.Link href="/about-us">Observatories</Nav.Link>
                                    <Nav.Link href="/contact-us">About Us</Nav.Link>
                                    <NavDropdown title="Pictures" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Picture of the Day</NavDropdown.Item>
                                        <NavDropdown.Item href="/mars">Mars</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                   
                                </Navbar.Collapse>
                            </Navbar>

                            <br />
                            <Switch>
                           
                            <Route path="/mars">
                                <Mars />
                            </Route>
                          
                        </Switch>
                        </Router>
                            
                        
                    </div>
                </div>
            </div>
        )  
    }
}

export default Header;