import React from 'react'

const Table = ( { title, name  } /*aca llamas los datos que necesitas de getData.jsx*/ ) => {
    
    return (

        /*ACÁ PINTAS LA TABLA ↓ */ 

        <div>
            <p>{title}</p>
            <p>{name}</p>
        </div>
    )
}

export default Table
