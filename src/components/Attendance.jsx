<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
=======
import React, {useEffect} from 'react'
>>>>>>> 26f8a981938c95a1df7a14ecf938a57a90c3dc7f
import { getData } from '../services/getData';
import TableTotalInfo from './TableTotalInfo';
import { InfoParty } from './InfoParty';
import { useFetchFilter } from '../hooks/useFetchFilter';
<<<<<<< HEAD
<<<<<<< HEAD
import TableMostLeast from './TableMostLeast';
import { cutTop10 } from '../services/cutTop10';
import { orderArray } from '../services/orderArray';
=======
>>>>>>> parent of 26f023b... agrego tablas

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
=======
import { useInjectedText } from '../hooks/useInjectedText';

=======
import TableOrderAttribute from './TableOrderAttribute';
>>>>>>> 26f023b84be9e9550679f8d01aa15432314c8980

const Attendance = ({ typeFetch }) => {
    
    const { data:congress }  = useFetchFilter(typeFetch);
    const text = useInjectedText('attendance');
    
    getData(typeFetch);

    return (
        <>
        <div className="contentMainInfo">
            <InfoParty  text={text} party={'Attendance'}/>
        </div>

        <div className="contentMain">
            <div className="div-content-info">
                <TableTotalInfo congress={ congress } />
>>>>>>> 26f8a981938c95a1df7a14ecf938a57a90c3dc7f
            </div>
<<<<<<< HEAD

            {/* <div className="contentMain">
                <div className="div-content-info">
                    <TableMostLeast props={attendance.leastEngaged} />
                </div>
=======
        </div>
        <div className="contentMain">
            <div className="div-content-info">
                
>>>>>>> parent of 26f023b... agrego tablas
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