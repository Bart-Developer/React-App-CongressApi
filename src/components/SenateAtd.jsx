import React from 'react'
import { getData } from '../services/getData';



const SenateAtd = ({ typeFetch }) => {
    
    console.log(typeFetch)
    getData(typeFetch);
    
    return (
        <div className='text-white'>
            <h1>im senate Attendance</h1>
        </div>
    )
}

export default SenateAtd

