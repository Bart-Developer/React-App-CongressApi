import React from 'react'
import Home from '../src/views/Home.jsx'
import Info from '../src/components/Info'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'


const App = () => {

    return (

        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/info" component={Info} />
                    <Redirect to="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;