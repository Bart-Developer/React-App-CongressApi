import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = ( { data } ) => {


    const toggleComponents = (component, typeFetch='') => {
        data({
            comp:component,
            table: typeFetch
        });
        
    }

    return (

        <>
            <nav className="navbar navbar-dark">
                <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <p className="navbar-brand mt-2 p span">Congress Status</p>
           
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="accordion mt-2" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button onClick={()=> {toggleComponents('info') } } className="accordion-button static" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Home
                                    </button>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Congress 113
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <button onClick={()=> { toggleComponents('Congress113', 'house') } } className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-expanded="false" aria-controls="collapseTwo">
                                        House
                                    </button>

                                    <button onClick={()=> {toggleComponents('Congress113', 'senate')}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"  aria-expanded="false" aria-controls="collapseTwo">
                                        Senate
                                    </button>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Attendance
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <button onClick={()=> {toggleComponents('Attendance' , 'house')}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"  aria-expanded="false" aria-controls="collapseTwo">
                                        House
                                    </button>

                                    <button onClick={()=> {toggleComponents('Attendance', 'senate')}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"  aria-expanded="false" aria-controls="collapseTwo">
                                        Senate
                                    </button>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Loyalty
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <button onClick={()=> {toggleComponents('Loyalty' , 'house')}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"  aria-expanded="false" aria-controls="collapseTwo">
                                        House
                                    </button>

                                    <button onClick={()=> {toggleComponents('Loyalty', 'senate')}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"  aria-expanded="false" aria-controls="collapseTwo">
                                        Senate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar