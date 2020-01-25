import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="app-wrapper--full">
            <div className="home-box">
                <h1>warehouse</h1>
                <h4>eblocks - assessment</h4>
                <p>Candidate: Georges C. Takoudjou</p>
                <Link to="/dashboard/products" className="app-btn">ENTER</Link>
            </div>
        </div>
    )
}

export default Home;