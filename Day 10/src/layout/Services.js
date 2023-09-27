import React from 'react'
import Solution from './Solution'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='background-image'>
         <h2>
            <Link to='/que'><div className="continue-btn">Back</div></Link></h2>
        <div className="hero">
            <Solution/>
        </div>
        </div>
    );
};
export default Home;                                                                                                                        