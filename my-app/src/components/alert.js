import React from 'react'

import './alert.css'

function Alert(props) {
    return (
        <div className={`alert alert__color-${props.cor}`}>
            <p className='alert__texto'>{props.children} </p>
        </div>
    )
}

export default Alert 