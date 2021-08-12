import { React, useState } from 'react'

export default function Info() {

    const [readMore, setReadMore] = useState(false)


    const changeStatus = () => {
        setReadMore(!readMore);
    }

    return (

        <div className="contentInfo">
            <div>
                <h1 className="text-danger">ABOUT US</h1>
            </div>

            <div>
                <p>First convened in 1789, the composition and powers of the Senate are established in Article One of the U.S. Constitution. Each state is represented by two senators, regardless of population, who serve staggered six-year terms. The Senate has several exclusive powers not granted to the House, including consenting to treaties as a precondition to their ratification and consenting to or confirming appointments of Cabinet secretaries, federal judges, other federal executive officials, military officers, regulatory officials, ambassadors, and other federal uniformed officers, as well as trial of federal officials impeached by the House. Governments exist to serve the people. Information on how officials conduct the public business and spend taxpayer money must be readily available and easily understood. This transparency allows good and just governance.{readMore && <span className="animate__animated animate__fadeIn"> Background History of Government Transparency In the West, the idea that government should be open to public scrutiny and susceptible to public opinion dates back at least to the time of the Enlightenment, when many philosophes made an attack on absolutist doctrine of state secrecy, a core part of their intellectual project. This approach, and that of the philosophes more broadly, is strongly related to recent historiography on the eighteenth-century public sphere. Influenced by Enlightenment thought, the revolutions in America (1776) and France (1789), freedom of the press enshrined provisions and requirements for public budgetary accounting and freedom of the press in constitutional articles. In the nineteenth century, attempts by Metternichean statesmen to row back on these measures were vigorously opposed by a number of eminent liberal politicians and writers, Bentham, Mill and Acton prominent among the latter. Open government is widely seen to be a key hallmark of contemporary democratic practice and is often linked to the passing of freedom of information legislation. Scandinavian countries claim to have adopted the first freedom of information legislation, dating the origins of its modern provisions to the eighteenth century and Finland continuing the presumption of openness after gaining independence in 1917, passing its Act on Publicity of Official Documents in 1951 (superseded by new legislation in 1999). The United States passed its Freedom of Information Act (FOIA) in 1966, FOIAs, Access to Information Acts (AIAs) or equivalent laws were passed in Denmark and Norway in 1970.</span>} </p>
            </div>
            <div className="btn-more-less">
                <button className="btn btn-outline-danger" onClick={changeStatus}>{readMore ? 'Read less' : 'Read more'}</button>
            </div>
        </div>
    )
}
