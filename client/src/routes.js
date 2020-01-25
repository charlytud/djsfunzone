import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Dashboard from './hoc/Dashboard';
import Product from './components/product/Product';
import ProductResult from './components/product/ProductResult';
import Logout from './components/admin/Logout';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/dashboard/products' exact component={ Dashboard(Product) } />
            <Route path='/dashboard/products/results' exact component={ Dashboard(ProductResult) } />
            <Route path='/logout' exact component={ Logout } />
        </Switch>
    )
}

export default Routes;