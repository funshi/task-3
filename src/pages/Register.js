import React from 'react'
import { Link } from 'react-router-dom';
import Reg from '../components/Reg';

function Register() {
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
            <h1>Create an Account,</h1>
            </div>
            <Reg />
            <footer>
                <div className="foot_1"></div>
                <div className="foot">
                   <p id="foot">  Eventful Moments by Olufunsho Anagua Gabriel </p>
                </div>
            </footer>
        </div>
    )
}

export default Register
