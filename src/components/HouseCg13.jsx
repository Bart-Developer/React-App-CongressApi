import React from 'react'
import Table from '../components/Table'
import { useFetchFilter } from '../hooks/useFetchFilter';

const HouseCg13 = ({ typeFetch }) => {

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

export default HouseCg13