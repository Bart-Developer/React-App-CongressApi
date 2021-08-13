import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { renderComponent } from '../services/renderer'
import Info from '../components/Info';
import HouseCg13 from '../components/HouseCg13';
import SenateCg13 from '../components/SenateCg13';


const Home = () => {

    const [component, setComponent] = useState('info')

    useEffect(() => {

        if (component === 'info') {
            return <Info />
        } else if (component === 'HouseCg13') {
            return <HouseCg13 />
        } else if(component === 'SenateCg13'){
            return <SenateCg13 />
        }
    }, [component])

    return (

        <>
            <Header />

            <Navbar data={ setComponent } />

            <main>
                <div className="contentMain">
                    <div className="div-content-info">
                        {renderComponent(component)}
                    </div>
                </div>
            </main>

        </>
    )
}
export default Home;