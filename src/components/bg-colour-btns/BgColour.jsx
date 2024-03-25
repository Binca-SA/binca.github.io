import React from 'react';
import './bgColour.css';
import PropTypes from 'prop-types'


export default function BgColour(props) {  
    return <> <div className='container-change-colour'>
        <button onClick={() => props.changeColor("#DCD6EB")} className='container-change-colour__color'></button>
        <button onClick={() => props.changeColor("#EFD89C")} className='container-change-colour__color'></button>
        <button onClick={() => props.changeColor("#C3DCC1")} className='container-change-colour__color'></button>
    </div>
    </>
}

BgColour.propTypes = {
    changeColor: PropTypes.func,
    children: PropTypes.element
};