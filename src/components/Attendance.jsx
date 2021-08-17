import React, {useEffect} from 'react'
import { getData } from '../services/getData';
import TableTotalInfo from './TableTotalInfo';
import { InfoParty } from './InfoParty';
import { useFetchFilter } from '../hooks/useFetchFilter';
<<<<<<< HEAD
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
            </div>
        </div>
        <div className="contentMain">
            <div className="div-content-info">
                <TableOrderAttribute congress={ congress } />
            </div>
        </div>
        </>
    )
}

export default Attendance

