import React, { Component } from 'react';
import Header from './Header';
import Slider from '../slider/Slider';
import HotOffers from '../hot_offers/HotOffers';
import Trending from '../trending/Trending';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <HotOffers />
                <Trending />
                <Footer />
            </div>
        )
    }
}
