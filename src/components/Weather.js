import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({result}) => {

    const {name, main} = result;

    if(!name) return null;

    const kelvin= 273.15;

    return ( 
       
        <div className="card-panel blue col s12" >
            <h5> The weather in, {name} is: </h5>
            <p className="temperatira">{parseFloat(main.temp - kelvin,10).toFixed(2)} <span>&#x2103;</span> </p> 
            <p className="temperatira"> Maximum temperature: {parseFloat(main.temp_max - kelvin,10).toFixed(2)} <span>&#x2103;</span> </p> 
            <p className="temperatira">Minimum temperature: {parseFloat(main.temp_min - kelvin,10).toFixed(2)} <span>&#x2103;</span> </p> 
            <p className="temperatira"> Humidity:  {main.humidity} % </p> 
        </div>
        
     );
}

Weather.propTypes ={
    results: PropTypes.object.isRequired
}

export default Weather;

