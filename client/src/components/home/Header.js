import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <section className="app-header">
                <div className="app-wrapper--full app-header__top-nav">
                    <div className="app-header__top-nav__left">
                      <span>Special Offers !</span>
                    </div>
                    <div className="app-header__top-nav__right">
                        <ul>
                            <li>Login</li>
                            <li>Register</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="app-wrapper app-wrapper--medium app-header__bottom-nav">
                    <div className="app-header__bottom-nav__left">
                      <img src="./images/logo/logo.png" alt="Logo" height="auto" width="300"/>
                    </div>
                    <div className="app-header__bottom-nav__right">
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Your Cart</li>
                        </ul>
                    </div>
                </div>
                <div className="app-wrapper app-wrapper--medium app-header__contact-info">
                    <ul>
                        <li>info@djsfunzone.co.za</li>
                        <li>083 283 9797</li>
                    </ul>
                </div>
            </section>
        )
    }
}

