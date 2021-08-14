import React from 'react'
import { getData } from '../services/getData'
import Table from '../components/Table'

const HouseCg13 = ({ typeFetch }) => {

    console.log(typeFetch)
    getData(typeFetch);


    return (

        <div className='text-white'>
            <Table api = { typeFetch } />
        </div>
    )
}
export default HouseCg13