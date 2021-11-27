import React from 'react';

const Formulario = () => {
    return ( 
        
        <form>
            <div className= "input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city" 
                 />
                 <label>City:</label>

            </div>
        </form>


     );
}
 
export default Formulario;