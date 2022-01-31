import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from './components/Formulario';
import Weather from './components/Weather';
import Error from './components/Error';


function App() {

  const [find, setFind]=useState ({
    city: '',
    country: ''
  });

  const [query, setQuery] = useState(false);
  const {city, country} =find;
  const [result, setResult] =useState({});
  const [error, setError] = useState(false);



  useEffect (() => {
    
    const queryAPI = async () => {

     if(query){
      const apiKey='709f7ded882e2e79e26d745445be33b3';
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

      const answer = await fetch(url);
      const result = await answer.json();

      
      setResult(result);
      setQuery(false);


      //detects if it finds the city
      if(result.cod === "404"){
        setError(true);
      }else{
        setError(false);
      }

     }

    }

    queryAPI();
    //eslint-disable-next-line
  },[query]);


  


  return (
    <Fragment>
      <Header
      titulo='Weather React App'
      />
      <div className='contenedor-form'>
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
              find={find}
             setFind={setFind}
             setQuery={setQuery}
              />
            </div>
            <div className="col m6 s12">
              {error ? <Error mes="City not found" /> :null}
              <Weather
               result={result}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
