import React, { useEffect, useState } from 'react'
import TableMostLeast from './TableMostLeast'



const TableOrderAttribute = ({ congress }) => {


    //Hooks
    const [attendance, setAttendance] = useState({

        leastEngaged: [],
        MostEngaged: [],
    })

    const [data, setData] = useState(congress)

    //Functions
    function orderArray(array, propiedad) {
        let copyArray = [...array];
        copyArray.sort((a, b) => {
            if (a[propiedad] > b[propiedad]) {
                return -1
            }
            if (a[propiedad] < b[propiedad]) {
                return 1
            }
            else return 0;
        })

        for (let i = 0; i < copyArray.length; i++) {
            if (copyArray[i][propiedad] === 0) {
                copyArray.splice(i, 1); i--;
            }
        }

        return copyArray;
    }

    function cutTop10(array) {
        let copyArray = [...array]
        let index = parseInt(copyArray.length * .1);
        let arrayAux = copyArray.splice(0, index + 1);
        return arrayAux
    }


    useEffect(() => {

        const asyncFunction = () => {
            setData(congress)
        }; asyncFunction();

        setAttendance({
            leastEngaged: cutTop10(orderArray(data, "missed_votes_pct")),
            MostEngaged: cutTop10(orderArray(data, "missed_votes_pct").reverse()),
        })

    }, [congress, data])


    return (

        <>
            <div className="contentMain">
                <div className="div-content-info">
                    <TableMostLeast props={attendance.leastEngaged} />
                </div>
            </div>

            <div className="contentMain">
                <div className="div-content-info">
                    <TableMostLeast props={attendance.MostEngaged} />
                </div>
            </div>

        </>
    )
}

export default TableOrderAttribute
