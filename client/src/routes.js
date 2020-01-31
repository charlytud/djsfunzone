import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Logout from './components/admin/Logout';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/logout' exact component={ Logout } />
        </Switch>
    )
}

export default Routes;