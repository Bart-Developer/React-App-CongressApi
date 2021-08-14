import React from 'react'
import { getData } from '../services/getData';

const SenateCg13 = ({ typeFetch }) => {
    
    console.log(typeFetch)
    getData(typeFetch);

    return (
        <div className='text-white'>
            <h1>im senate in  113!</h1>
        </div>
    )
}

export default SenateCg13