import React, {useEffect} from 'react'
import { getData } from '../services/getData';
import TableTotalInfo from './TableTotalInfo';
import { InfoParty } from './InfoParty';
import { useFetchFilter } from '../hooks/useFetchFilter';
import { useInjectedText } from '../hooks/useInjectedText';


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
                
            </div>
        </div>
        </>
    )
}

export default Attendance

