import React from 'react'
import { getData } from '../services/getData';

const HouseAtd = ({ typeFetch }) => {

    console.log(typeFetch)
    getData(typeFetch);
    
    return (
        <div>
            <h1 className='text-white'>im house Attendance</h1>
        </div>
    )
}

export default HouseAtd
