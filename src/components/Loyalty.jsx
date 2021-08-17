import React, { useEffect, useState } from 'react'
import { useFetchFilter } from '../hooks/useFetchFilter';
import { cutTop10 } from '../services/cutTop10';
import { getData } from '../services/getData';
import { orderArray } from '../services/orderArray';
import TableMostLeast from './TableMostLeast';
import TableTotalInfo from './TableTotalInfo';


const Loyalty = ({ typeFetch }) => {
    getData(typeFetch);

    //Hooks
    const { data: congress } = useFetchFilter(typeFetch);

    const [loyalty, setLoyalty] = useState({

        leastLoyal: [],
        mostLoyal: [],
    })

    const [data, setData] = useState(congress)

    useEffect(() => {

        const asyncFunction = () => {
            setData(congress)
        }; asyncFunction();

        setLoyalty({
            leastLoyal: cutTop10(orderArray(data , "votes_with_party_pct").reverse()),
            mostLoyal: cutTop10(orderArray(data , "votes_with_party_pct"))
        })

    }, [congress, data])

    return (

        <>

        <div className="contentMain">
            <div className="div-content-info">
                <TableTotalInfo congress={congress} />
            </div>
        </div>
        
        <div className="contentMain">
            <div className="div-content-info">
                <TableMostLeast tittle={ 'Least Loyal' } props={ loyalty.leastLoyal } />
            </div>
        </div>

        <div className="contentMain">
            <div className="div-content-info">
                <TableMostLeast tittle={ 'Most Loyal' } props={ loyalty.mostLoyal } />
            </div>
        </div>
    </>
    )
}

export default Loyalty
