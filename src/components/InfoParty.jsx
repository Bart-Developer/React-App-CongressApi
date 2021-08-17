import React from 'react'

export const InfoParty = ({text, party}) => {
    return (
        <div className="text flex-wrap">

            <h1 className="fw-bold text-dark">{party}</h1>

            <div className="content-text">
                <p className="text-white">{text}</p>
            </div>

        </div>
    )
}
