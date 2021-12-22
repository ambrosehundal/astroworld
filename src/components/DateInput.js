import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = props => (
    <div className="container">

        <div className="row">

        <div className="col-md-2">
            
        </div>

        <div className="col-md-8">

            <h1><b>Astronomy Picture Of The Day by NASA</b></h1>

        </div>


        <div className="col-md-2">
            
        </div>

        </div>

    <div className="row">

        <div className="col-md-4">

        </div>
        <div className="col-md-4" style={{"margin-top":30}}>
            Select a Date:
        <DatePicker selected={props.date} onChange={props.changeDate}/>

            
        </div>

        <div className="col-md-4">
            
        </div>
    


   



    </div>
   
    
    </div>
);



export default DateInput;