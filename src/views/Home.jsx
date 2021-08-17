import React, { useState } from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { renderComponent } from '../services/renderer'


const Home = () => {

    const [component, setComponent] = useState({ comp: 'info', table: '' })

    return (

        <>
            <Header />

            <Navbar data={setComponent} />

            <main>

                {renderComponent(component)}

            </main>

        </>
    )
}
export default Home;