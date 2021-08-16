import React, {useState, useEffect} from 'react'

const TableTotalInfo = ({ congress }) => {

    const [data, setData] = useState(congress)
    const [democrat, setDemocrat] = useState([])
    const [democratPercent, setDemocratPercent] = useState(0)
    const [republican, setRepublican] = useState([])
    // const [republicanPercent, setRepublicanPercent] = useState([])
    const [independet, setIndependet] = useState([])
    // const [independetPercent, setIndependetPercent] = useState([])

    useEffect(() => {
        setData(congress)
        setDemocrat(data.filter(x => x.party === 'D')) //guardo los diferentes arrays para trabajar en ellos
        setRepublican(data.filter(x => x.party === 'R'))
        setIndependet(data.filter(x => x.party === 'ID'))

            handleVotedParty();
    }, [congress, data])


    var acumPercentD = 0; //defino variable para ir acumulando y setear al estado
    var acumPercentR = 0;
    const handleVotedParty = () =>{

        democrat.map(member =>{ //recorro 
            acumPercentD =  acumPercentD+  parseFloat(member.votes_with_party_pct.slice(1,7)); //acumulo por cada miembro 
        })
        setDemocratPercent((acumPercentD / democrat.length)) //seteo el porcentaje final

    }

    console.log(democratPercent)
    

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
                        <td>{democrat.length}</td>
                        <td>{democratPercent.toString() }</td>
                    </tr>
                    <tr>
                        <td>Republican</td>
                        <td>{republican.length}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Independent</td>
                        <td>{independet.length}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default TableTotalInfo;
