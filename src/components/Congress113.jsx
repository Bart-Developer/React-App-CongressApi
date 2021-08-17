import React from 'react'
import Table from './Table'


import { useFetchFilter } from '../hooks/useFetchFilter';

const Congress113 = ( { typeFetch } ) => {

    const { data:congress }  = useFetchFilter(typeFetch);

    return (
        
        <>
   
        <div className="contentMain">
            <div className="div-content-info">
                <Table congress={ congress } />
            </div>
        </div>

        </>
    )
}

export default Congress113