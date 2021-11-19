import React from 'react';
import "../styles/Log.css"
import { Link } from 'react-router-dom';

function Log() {
    return (
        <div>
             <form className="login">
        <div className="login-control">
           
                <label style={{fontSize:"smaller"}}>Email</label>
            <input className="email" type='text' placeholder="name@example.com" />
        </div>
        <div className="login-control">
                <label style={{fontSize:"small"}}>Password</label>
            <input className="password" type="text" />
        </div>
    <Link to="/MyBucket">
       <button id="log">Login</button>
        </Link>
        </form> 
        </div>
    )
};

export default Log;
