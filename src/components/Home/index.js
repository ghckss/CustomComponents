import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>
                <Link to="/ratioBar">RatioBar</Link>
            </h2>
        </div>
    );
};

export default Home;