import React from 'react';
import PropTypes from 'prop-types';


const Error = ({mes}) => {
    return (  
        <p className="red darken-4 error">{mes}</p>
    );
}

Error.propTypes={

    mes: PropTypes.string.isRequired
}
 
export default Error;