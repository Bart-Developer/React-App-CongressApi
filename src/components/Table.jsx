import React from 'react'

const Table = ({ congress }) => {

    return (

        /*ACÁ PINTAS LA TABLA ↓ */

        <div className="mainTable">
            <table className="table table-dark table-hover">
                <thead>
                    <tr className="text-danger">
                        <th scope="col">Name</th>
                        <th scope="col">Party</th>
                        <th scope="col">State</th>
                        <th scope="col">Seniority</th>
                        <th scope="col">% Votes w/Party</th>
                    </tr>
                </thead>
                <tbody>

            {

                congress.map( congressman =>
                    
                    <tr key={congressman.id}>
                    <td>{ congressman.name } {  congressman.last_name} </td>
                    <td>{ congressman.party }</td>
                    <td>{ congressman.state }</td>
                    <td>{ congressman.years_in_office }</td>
                    <td>{ congressman.votes_with_party_pct }</td>
                    </tr>
                )
            } 
                </tbody>
            </table>
        </div>
    )
}

export default Table
