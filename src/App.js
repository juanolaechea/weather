import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from './components/Formulario';

function App() {

  const [find, setFind]=useState ({
    city: '',
    country: ''
});

 const [query, setQuery] = useState(false)

  const {city, country} =find;


  useEffect (() => {
    
    const queryAPI = async () => {

     if(query){
      const apiKey='709f7ded882e2e79e26d745445be33b3';
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

      const answer = await fetch(url);
      const result = await answer.json();

      console.log(result);
     }
    }

    queryAPI();

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
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
