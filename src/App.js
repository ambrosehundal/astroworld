
import './App.css';
import { Provider } from 'react-redux'; 
import Observatory from './components/Observatory/Observatory';
import TwitterTimeline from './components/Home/TwitterTimelines';
import Mars from './components/Mars/Mars';
import Background from './components/Home/Background';
import DateInput from './components/PictureOfTheDay/DateInput';
import PictureOfTheDay from './components/PictureOfTheDay/PictureOfTheDay';
import SpaceNews from './components/Home/News/SpaceNews';
import NASAImages from './components/NASA/NASAImageLibrary';
import HomePageHeader from './components/Home/HomePageHeader';
import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,NavDropdown} from 'react-bootstrap'
import NASAImageLibrary from './components/NASA/NASAImageLibrary';



class App extends Component {
  state = {
    date: moment().toDate(),
    photo: "",
  };

  
  changeDate = dateFromInput => {
    this.setState({ date: dateFromInput });
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
           
     
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">


                                <Navbar.Brand href="/">Everything Astronomy</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                   
                                    <NavDropdown title="Pictures" id="basic-nav-dropdown">
                                        
                                    <NavDropdown.Item> <Link to="/photos/mars">Mars</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to="/photos/apod">Picture of the day</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to="/photos/earth">Earth</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link to="/photos/nasa">NASA Images</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link> <Link to="/observatories">Observatories</Link> </Nav.Link>
                                    </Nav>
                                   
                                </Navbar.Collapse>
                            </Navbar>

            
            <Switch>
              <Route exact path="/">
                <HomePageHeader/>
              <SpaceNews />
              <TwitterTimeline/>
              <Background/>
              </Route>
              <Route exact path="/photos/apod">
               <DateInput className="dateInput" changeDate={this.changeDate} date={this.state.date} /> 
                 <PictureOfTheDay photo={this.state.photo}/> 
              </Route>
              <Route path='/photos/mars'>
                <Mars/>
              </Route>

              <Route path='/photos/nasa'>
                <NASAImageLibrary/>
              </Route>

             

              <Route path='/observatories'>
                <Observatory/>
              </Route>
            </Switch>
                                    
      


      </Router>

   

    );
  }
}




export default App;
