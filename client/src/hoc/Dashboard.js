import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default function(ComposedClass) {
    class Dashboard extends Component {

        constructor(props){
            super(props);
    
            this.state = {
                loading: true,
            }
        }
    
        render() {
            const {
                loading
            } = this.state;
    
            return (
                <div>
                    <div className="dash-header">
                        <div className="app-wrapper app-wrapper--dash-header"> 
                        <h2>warehouse</h2>
                            <div className="dash-header__nav">
                                <ul>
                                    <li><Link to='/dashboard/products'>Products</Link></li>
                                    <li><Link to='/dashboard/categories'>Categories</Link></li>
                                    <li><Link to='/dashboard/suppliers'>Suppliers</Link></li>
                                </ul>
                                <div className="app-btn--logout">
                                    <Link to="/logout" className="dash-header__logout">
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dash-body">
                        <div className="app-wrapper">
                            <ComposedClass { ...this.props }/>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function mapStateToProps(state){
        return {
            product: state.product,
        }
    }
    
    return connect(mapStateToProps)(Dashboard);
}
