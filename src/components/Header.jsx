import React from 'react'
import { getSenators } from '../services/getSenators.jsx'

export default function Header() {
    
    getSenators();
    
    return (
        <>
            <header>
                <div className="ContentHeader">
                    <h1>EEUU Status</h1>

                </div>
            </header>
        </>
    )
}
