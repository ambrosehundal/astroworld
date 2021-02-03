import logo from './logo.svg';
import './App.css';
import Mars from './components/Mars'
import DateInput from './components/DateInput'
import Photo from './components/Photo'

function App() {
  
  changeDate = e =>{
    e.preventDefault();
    
  }
  
  state = {
    date: "",
    photo: ""
  };
  return (
    <div className="App">
     <DateInput changeDate={this.changeDate} />
    </div>
  );
}

export default App;
