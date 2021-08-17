import React from 'react'

const TableMostLeast = ({ props, tittle }) => {


    return (

        <div>
            <div className="tittleInfo">
                <h3 className="fw-bold">{tittle}</h3>
            </div>

            <div className="mainTable animate__animated animate__fadeIn">
                <table className="table table-dark table-hover ">
                    <thead>
                        <tr className="text-danger">
                            <th scope="col">Name</th>
                            <th scope="col">No. Missed Votes</th>
                            <th scope="col">% Missed</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            props.map(congressman =>

                                <tr key={congressman.id}>
                                    <td className='animate__animated animate__fadeIn'> {congressman.name}  {congressman.last_name} </td>
                                    <td className='animate__animated animate__fadeIn'> {congressman.missed_votes}</td>
                                    <td className='animate__animated animate__fadeIn'>% {congressman.missed_votes_pct}</td>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default TableMostLeast
