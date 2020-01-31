import React, { Component } from 'react';
import ProductList from '../product/ProductList';

export default class Trending extends Component {
    render() {
        return (
            <div className="app-wrapper app-trending">
                <ProductList />
            </div>
        )
    }
}
