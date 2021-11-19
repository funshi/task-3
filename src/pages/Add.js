import React from 'react';
import { Link } from 'react-router-dom';
import New from '../components/New';


function Add() {
    return (
        <div>
             <header>
                <div className="leftside">
                    Eventful Moment 
                </div>
                <div className="rightside">
                    <Link to="/Login" style={{color: 'white'}}> Logout </Link>
                    <Link to="/MyBucket" style={{color: 'white', marginLeft: '30px'}}> My Bucket </Link>
                </div>
            </header>

            <New />

            <footer>
                <div className="foot_1"></div>
                <div className="foot">
                   <p id="foot">  Eventful Moments by Olufunsho Anagua Gabriel </p>
                </div>
            </footer>
        </div>
    )
}

export default Add
