import React from 'react'
import { useFetchFilter } from '../hooks/useFetchFilter';
import Table from './Table';

const SenateCg13 = ({ typeFetch }) => {
   
    const { data:congress }  = useFetchFilter(typeFetch);

    return (
        
        <div className='text-white'>

            {
                congress.map(congressman =>

                    <Table
                        key={congressman.id}
                        {...congressman}
                    />
                )
            }

        </div>
    )
}

export default SenateCg13