import React, { useEffect, useState } from 'react'
import { getData } from '../services/getData';
import TableTotalInfo from './TableTotalInfo';
import { useFetchFilter } from '../hooks/useFetchFilter';
import TableMostLeast from './TableMostLeast';
import { cutTop10 } from '../services/cutTop10';
import { orderArray } from '../services/orderArray';

const Attendance = ({ typeFetch }) => {

    const { data: congress } = useFetchFilter(typeFetch);
    getData(typeFetch);


    const [ attendance, setAttendance ] = useState({

        leastEngaged: [],
        MostEngaged: [],
    })

    useEffect(() => {

        let array = Array.from(congress)
        console.log(array)

        setAttendance({
            leastEngaged: cutTop10(orderArray(array) , "missed_votes_pct"),
            MostEngaged: cutTop10(orderArray(array), "missed_votes_pct").reverse(),
        })

    }, [congress])

    return (
        <>
            <div className="contentMain">
                <div className="div-content-info">
                    <TableTotalInfo congress={ congress } />
                </div>
            </div>

            {/* <div className="contentMain">
                <div className="div-content-info">
                    <TableMostLeast props={attendance.leastEngaged} />
                </div>
            </div>

            <div className="contentMain">
                <div className="div-content-info">
                    <TableMostLeast props={attendance.MostEngaged} />
                </div>
            </div> */}

        </>
    )
}

export default Attendance;