import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { renderComponent } from '../services/renderer'
import Info from '../components/Info';
import HouseCg13 from '../components/HouseCg13';


const Home = () => {

    const [componente, setComponente] = useState('perrito')

    useEffect(() => {

        if (componente === 'info') {
            return <Info />
        } else if (componente === 'HouseCg13') {
            return <HouseCg13 />
        }
    }, [componente])



    return (

        <>
            <Header />

            <Navbar data={ setComponente } />

            <main>
                <div className="contentMain">
                    <div className="div-content-info">
                        {renderComponent(componente)}
                    </div>
                </div>
            </main>

        </>
    )
}
export default Home;