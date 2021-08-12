import React from 'react'
import Home from '../src/views/Home.jsx'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'


const App = () => {

    return (

        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Redirect to="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;