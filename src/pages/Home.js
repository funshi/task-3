import React from 'react'
import { Link } from 'react-router-dom';
import Log from '../components/Log';
import "../styles/Home.css";

function Home() {
    return (
        <div>
            <header>
                <div className="leftside">
                    Eventful Moment 
                </div>
                <div className="rightside">
                    <Link to="/Login" style={{color: 'white'}}> Login </Link>
                    <Link to="/Register" style={{color: 'white', marginLeft: '30px'}}> Register </Link>
                </div>
            </header>
            <div className="greet">
            <h1>Welcome back,</h1>
            <p>
                Hi, my name is Eventful Moments, I am a bucket.. no, not the bucket of water but i store awesome moments you will like to have in coming years
            </p>
            </div>
            <Log />
            <footer>
                <div className="foot_1"></div>
                <div className="foot">
                   <p id="foot">  Eventful Moments by Olufunsho Anagua Gabriel </p>
                </div>
            </footer>
        </div>
    )
};

export default Home
