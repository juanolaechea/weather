import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({find, setFind,setQuery}) => {


    const [error, setError]=useState(false);
    const {city, country} = find;

    const handleChange = e => {

        setFind({
            ...find,
            [e.target.name] : e.target.value
        });
    }
    // onSubmit validate

    const handleSubmit = e => {
        e.preventDefault();

        //validate 
        if(city.trim() ==='' || country.trim() ===''){
            setError(true);
            return;
        }
        setError(false);

        // send to app
        setQuery(true);

    }


    return ( 
        
        <form
        onSubmit={handleSubmit}
        >
            {error ? <Error mes ="All fields are required!"/> : null}
            <div className= "input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city" 
                    value={city}
                    onChange={handleChange}
                 />
                 <label htmlFor="city" >City:</label>
            </div>
            <div className= "input-field col s12">
              
              <select 
              name="country"
               id="country"
               value={country}
               onChange={handleChange}
               > 
                    <option value="">--Select--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
             </select>
              
                <label htmlFor="country">Country:</label>
        
            </div>
            <div className="input-field col s12">
                <input
                   type="submit"
                  value="Search"
                  className=" waves-effect waves-light btn-large btn-block yellow accent-4"
                  /> 
            </div>
        </form>


     );
}

Formulario.propTypes ={
    find: PropTypes.object.isRequired,
    setFind: PropTypes.func.isRequired,
    setQuery: PropTypes.func.isRequired


}
 
export default Formulario;