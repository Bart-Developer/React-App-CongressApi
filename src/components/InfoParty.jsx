import React from 'react'

export const InfoParty = ({text, party}) => {
    return (
        <div className="text flex-wrap">

            <div className="w-100 d-flex justify-content-center">
                <h1 className="fw-bold text-dark">{party}</h1>
            </div>

            <div className="content-text">
                <p className="text-white">{text}</p>
            </div>

        </div>
    )
}
