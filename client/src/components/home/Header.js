import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <section className="app-header">
                <div className="app-wrapper-full">
                    <div className="app-top_nav--left">
                      <span>Special Offers</span>
                    </div>
                    <div className="app-to_nav--right">
                        <ul>
                            <li>Login</li>
                            <li>Register</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="app-wrapper-full">
                    <div className="app-bottom_nav--left">
                        <ul>
                            <li>Logo</li>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Your Cart</li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="app-bottom_nav--right"></div>
                </div>
            </section>
        )
    }
}

