import React, { useState, useEffect } from 'react'

const TableTotalInfo = ({ congress }) => {

    //Hooks
    const [data, setData] = useState(congress)

    const [congressmanType, setCongressmanType] = useState({
        democrat: {
            member: [],
            votesWParty: 0,
        },
        republican: {
            member: [],
            votesWParty: 0,
        },
        independent: {
            member: [],
            votesWParty: 0,
        }
    })

    //Functions

    function sumAll(arrayFilter) {

        let amount = 0;
        arrayFilter.forEach(members => {
            amount += members.votes_with_party_pct ;
        })

        return amount / arrayFilter.length
    }


    useEffect(() => {

        const asyncFunction = () => {
            setData(congress)
        }

        asyncFunction();

        setCongressmanType(
            {
                democrat: data.filter(x => x.party === 'D'),
                demoVotesWParty: sumAll(data.filter(x => x.party === 'D')).toFixed(2),

                republican: data.filter(x => x.party === 'R'),
                repVotesWParty: sumAll(data.filter(x => x.party === 'R')).toFixed(2),

                independent: data.filter(x => x.party === 'ID'),
                indVotesWParty: sumAll(data.filter(x => x.party === 'ID')).toFixed(2),
            }
        )

    }, [congress, data])


    return (
        <div>
            <div className="mainTable animate__animated animate__fadeIn">
                <table className="table table-dark table-hover ">
                    <thead>
                        <tr className="text-danger">
                            <th scope="col">Party</th>
                            <th scope="col">N° of reps</th>
                            <th scope="col">% voted w/ Party</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Democrat</td>
                            <td>{ congressmanType.democrat.length }</td>
                            <td>% { isNaN(congressmanType.demoVotesWParty) ? 'Loading...' : congressmanType.demoVotesWParty } </td>
                        </tr>
                        <tr>
                            <td>Republican</td>
                            <td>{ congressmanType.republican.length }</td>
                            <td>% { isNaN(congressmanType.repVotesWParty) ? 'Loading...' : congressmanType.repVotesWParty }</td>
                        </tr>
                        <tr>
                            <td>Independent</td>
                            <td>{ congressmanType.independent.length }</td>
                            <td>% { isNaN(congressmanType.indVotesWParty) ?  'Loading...' : congressmanType.indVotesWParty }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableTotalInfo;
