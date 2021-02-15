
import './App.css';
import Mars from './components/Mars'
import DateInput from './components/DateInput'
import Photo from './components/Photo'
import React, { Component } from 'react'
import Header from './components/Navbar'
import moment from "moment";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react'


class App extends Component {
  state = {
    date: moment().toDate(),
    photo: "",
    showApod: false,
    showMars:false
  };
  
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
        <Header/>
      
        <DateInput changeDate={this.changeDate} date={this.state.date} />
        <Photo  photo={this.state.photo}/>
        
      </div>
    );
  }
}




export default App;
