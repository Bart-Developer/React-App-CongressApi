import React, { useState , useEffect } from 'react';

const Table = ( { congress } ) => {
    
    const [ filterCongress, setFilterCongress ] = useState(congress)
    
    // Hooks
    useEffect(() => {
        const handleSetApi = () => {setFilterCongress(congress)}
        handleSetApi();
    },  [ congress ])
    

    // Functions
    const handleFilterChange = (partySelected) => {

        setFilterCongress(congress.filter(x => x.party === partySelected));
    }

    return (

        /*ACÁ PINTAS LA TABLA ↓ */

        <div className="mainTable animate__animated animate__fadeIn">
            <div onChange={(e) => handleFilterChange(e.target.id)} className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="R" />
                <label className="btn btn-outline-light label-table" htmlFor="R">Republicans</label>

                <input type="radio" className="btn-check" name="btnradio" id="D" />
                <label className="btn btn-outline-light label-table" htmlFor="D">Democrats</label>

                <input type="radio" className="btn-check" name="btnradio" id="ID" />
                <label className="btn btn-outline-light label-table" htmlFor="ID">Independents</label>

            </div>
            <table className="table table-dark table-hover ">
                <thead>
                    <tr className="text-danger">
                        <th scope="col">Name</th>
                        <th scope="col">Party</th>
                        <th scope="col">State</th>
                        <th scope="col">Seniority</th>
                        <th scope="col width">% Votes w/Party</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        filterCongress.map(congressman =>

                            <tr key={congressman.id}>
                                <td className='animate__animated animate__fadeIn'>{congressman.name} {congressman.last_name} </td>
                                <td className='animate__animated animate__fadeIn'>{congressman.party}</td>
                                <td className='animate__animated animate__fadeIn'>{congressman.state}</td>
                                <td className='animate__animated animate__fadeIn'>{congressman.years_in_office}</td>
                                <td className='animate__animated animate__fadeIn'>{congressman.votes_with_party_pct}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
