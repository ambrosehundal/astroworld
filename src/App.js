
import './App.css';
import Observatory from './components/Observatory';
import TwitterTimeline from './components/TwitterTimelines';
import Mars from './components/Mars';
import Background from './components/Background';
import DateInput from './components/DateInput';
import Earth  from './components/Earth';
import Photo from './components/Photo';
import SpaceNews from './components/SpaceNews';
import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import RoverPhotos from './components/RoverPhotos';



class App extends Component {
  state = {
    date: moment().toDate(),
    photo: "",
    showDateInput: true,
    showPhoto:true,
    showMars:false,
    showEarth: false,
    spaceNews: "",
  };

  

  getSpaceNews = () => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
    .then(response => response.json())
    .then(json => this.setState({ spaceNews:json }))

  }

  showRover = () => {
    this.setState({
      showMars:true,
      showPhoto:false,
      showDateInput:false
    });
  }

  showApod = () => {
    this.setState({
      showMars:false,
      showPhoto:true,
      showDateInput:true

    });
  }

  showEarth = () => {
    this.setState({
      showMars:false,
      showPhoto:false,
      showDateInput:false,
      showEarth: true

    });
  }
  
  changeDate = dateFromInput => {
    this.setState({ date: dateFromInput });
    console.log(typeof(dateFromInput));
    this.getPhoto(this.formatDate(dateFromInput));
    
  };

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=brpG7ZJTp8W280XldBgoPiAon7mWqaOORiYGYghh`)
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
      <Router>
           <div id="root">
     
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">


                                <Navbar.Brand href="/">Everything Astronomy</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link> <Link to="/observatories">Observatories</Link> </Nav.Link>
                                    <NavDropdown title="Pictures" id="basic-nav-dropdown">
                                        
                                    <NavDropdown.Item> <Link to="/photos/mars">Mars</Link></NavDropdown.Item>
                                        <NavDropdown.Item onClick={this.showApod}>Picture of the Day</NavDropdown.Item>
                                        {/* <NavDropdown.Item onClick={this.showRover} >Mars</NavDropdown.Item> */}
                                        <NavDropdown.Item onClick={this.showEarth} >Earth</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                   
                                </Navbar.Collapse>
                            </Navbar>

            
            <Switch>
              <Route exact path="/">
             
              <TwitterTimeline/>
              <Background/>
              </Route>
              <Route exact path="/photos/apod">
               <DateInput className="dateInput" changeDate={this.changeDate} date={this.state.date} /> 
                 <Photo photo={this.state.photo}/> 
              </Route>
              <Route path='/photos/mars'>
                <Mars/>
              </Route>

              <Route path='/observatories'>
                <Observatory/>
              </Route>




            </Switch>
                            
        

       
        
        {this.state.showEarth && <Earth/>}
        <SpaceNews spaceNews = {this.state.spaceNews}/>

      
        
      </div>


      </Router>

   

    );
  }
}




export default App;
