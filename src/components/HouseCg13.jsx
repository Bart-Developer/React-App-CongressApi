import React from 'react'
import Table from '../components/Table'
import { useFetchFilter } from '../hooks/useFetchFilter';

const HouseCg13 = ({ typeFetch }) => {

    const { data:congress }  = useFetchFilter(typeFetch);

    return (

        <div className='text-white'>
    
                <Table congress={ congress } />

        </div>
    )
}

export default HouseCg13