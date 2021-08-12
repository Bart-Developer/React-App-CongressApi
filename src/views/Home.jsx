import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Info from '../components/Info'

const Home = () => {
   
    return (
 
        <>
        
            <Header />
            <Navbar />

            <main>
                <div className="contentMain">
                    <div className="div-content-info">
                        <Info/>
                    </div>
                </div>
            </main>
          
        </>
    )
}
export default Home;