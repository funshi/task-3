import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Edit.css"

function Edit() {
    return (
        <div>
             <header>
                <div className="leftside">
                    Eventful Moment 
                </div>
                <div className="rightside">
                    <Link to="/Login" style={{color: 'white'}}> Logout </Link>
                    <Link to="/MyBucket" style={{color: 'white', marginLeft: '30px'}}> MyBucket </Link>
                </div>
            </header>
            <main>
                <div className="heading">
                    Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury
                </div>
                <div className="date">20/05/2025</div>
                <p className="text">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. 
                <br /> <br />
                Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                <br /> <br />
                 Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                </p>
                <div className="decide">
                <Link to="#">
                    <button className="edit" >Edit</button>
                </Link>
                <Link to="#">
                    <button className="delete" >Delete</button>
                </Link>
                </div>
            </main>

            <footer>
                <div className="foot_1"></div>
                <div className="foot">
                   <p id="foot">  Eventful Moments by Olufunsho Anagua Gabriel </p>
                </div>
            </footer>
            
        </div>
    )
}

export default Edit
