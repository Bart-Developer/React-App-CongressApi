import React from 'react'
import { getData } from '../services/getData';
import TableTotalInfo from './TableTotalInfo';
import { useFetchFilter } from '../hooks/useFetchFilter';

const Attendance = ({ typeFetch }) => {
    
    const { data:congress }  = useFetchFilter(typeFetch);
    getData(typeFetch);
    
    return (
        <>
        <div className="contentMain">
            <div className="div-content-info">
                <TableTotalInfo congress={ congress } />
            </div>
        </div>
        <div className="contentMain">
            <div className="div-content-info">
                
            </div>
        </div>
        </>
    )
}

export default Attendance

