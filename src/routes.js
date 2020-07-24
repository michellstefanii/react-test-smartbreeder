import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Home from './pages/Home'

function CustomRoute({ isPrivate, ...rest }) {

    const authenticated = localStorage.getItem('user')

    if (isPrivate && !authenticated) {
      return <Redirect to="/" />
    }

    if (!(isPrivate) && authenticated) {
        return <Redirect to="/home" />
      }

    return <Route {...rest} />;
}

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <CustomRoute path="/" exact component={Logon} />
                <CustomRoute path="/register" component={Register} />
                <CustomRoute isPrivate path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    )
} 