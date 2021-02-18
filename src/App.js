
import './App.css';
import Mars from './components/Mars'
import DateInput from './components/DateInput'
import Photo from './components/Photo'
import React, { Component } from 'react'
import Header from './components/Navbar'
import moment from "moment";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'


class App extends Component {
  state = {
    date: moment().toDate(),
    photo: "",
    showDateInput: true,
    showPhoto:true,
    showMars:false
  };

  showRover(){
    this.setState({
      showMars:true,
      showPhoto:false,
      showDateInput:false
    });
  }
  
  changeDate = dateFromInput => {
    this.setState({ date: dateFromInput });
    console.log(typeof(dateFromInput));
    this.getPhoto(this.formatDate(dateFromInput));
    
  };

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=`)
    .then(response => response.json())
    .then(json => this.setState({ photo:json }))

  };

  formatDate = apod_date => {
    let year = apod_date.getFullYear();
    let month = apod_date.getMonth() + 1;
    let day = apod_date.getDay();
    return `${year}-${month}-${day}`;
  }

  
  
  render() {
    return (

      <div id="root">
     
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
                                        <NavDropdown.Item onClick={this.showRover} >Mars</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                   
                                </Navbar.Collapse>
                            </Navbar>

                           
                            
     

        
        
        
        { this.state.showMars && <Mars props={this.state.showMars}/>}
        <DateInput changeDate={this.changeDate} date={this.state.date} />
        <Photo photo={this.state.photo}/>
        
      </div>
    );
  }
}




export default App;
