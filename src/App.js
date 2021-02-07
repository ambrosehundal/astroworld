
import './App.css';
import Mars from './components/Mars'
import DateInput from './components/DateInput'
import Photo from './components/Photo'
import React, { Component } from 'react'

class App extends Component {
  state = {
    date: "",
    photo: ""
  };
  
  changeDate = e =>{
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({date: dateFromInput});
    this.getPhoto(dateFromInput);
    
  };

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=`)
    .then(response => response.json())
    .then(json => this.setState({ photo:json }))

  };

  
  
  render() {
    return (
      <div>
        <h1>NASA's Astronomy Picture of the Day</h1>
        <DateInput changeDate={this.changeDate} />
        <Photo  photo={this.state.photo}/>
      </div>
    );
  }
}

export default App;
