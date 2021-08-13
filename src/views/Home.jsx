import React, { useState } from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { renderComponent } from '../services/renderer'


const Home = () => {

    const [component, setComponent] = useState('info')

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