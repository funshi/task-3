import React from 'react';
import { Link } from 'react-router-dom';

function Reg() {
    return (
        <div>
            <form className="login">
        <div className="login-control">
           
                <label style={{fontSize:"smaller"}}>Fullname</label>
            <input className="email" type='text' />
        </div>
        <div className="login-control">
                <label style={{fontSize:"small"}}>Email</label>
            <input className="password" type="text" />
        </div>
        <div className="login-control">
                <label style={{fontSize:"small"}}>Password</label>
            <input className="password" type="text" />
        </div>
        <Link to="#">
       <button id="log">Create</button>
       </Link>
        </form>
        </div>
    )
}

export default Reg
