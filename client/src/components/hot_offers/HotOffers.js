import React, { Component } from 'react';
import ProductList from '../product/ProductList';

export default class HotOffers extends Component {
    render() {
        return (
            <div className="app-wrapper app-hotoffers">
                <ProductList />
            </div>
        )
    }
}

