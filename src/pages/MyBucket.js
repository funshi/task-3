import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/MyBucket.css"

function MyBucket() {
    return (
        <div>
            <header>
                <div className="leftside">
                    Eventful Moment 
                </div>
                <div className="rightside">
                    <Link to="/Login" style={{color: 'white'}}> Logout </Link>
                    <Link to="/Register" style={{color: 'white', marginLeft: '30px'}}> My Bucket </Link>
                </div>
            </header>
            <main>
                <div className="main">
                <div className="left">
                    <h1>Welcome Olufunsho Anagua</h1>
                    Here are items in your eventful momeent bucket
                </div>
                <div className="right">
                    <Link to="/Add">
                    <button id="buck">Add Item</button>
                    </Link>
                </div>
                </div>
                <div className="lorem1">
                    <div id="container_1">
                        <div id="text">
                        <h5>Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</h5>
                            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                        </div>
                    <div>
                        <div className="linkDate">
                           <div id="link"><Link to="/Edit">View Details</Link>
                        </div>
                        <div id="date">
                            17/11/2001  &emsp; 17/11/2050
                        </div>

                        </div>
                        </div>
                    </div>
                    <div id="container_2">
                        <div id="text">
                        <h5>Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</h5>
                            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                        </div>
                       <div className="linkDate">
                           <div id="link"><Link to="/Edit">View Details</Link>
                        </div>
                        <div id="date">
                            17/11/2001  &emsp; 17/11/2050   
                        </div>

                        </div>
 
                    </div>
                </div>

                <div className="lorem1">
                <div id="container_1">
                        <div id="text">
                        <h5>Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</h5>
                            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                        </div>
                    <div>
                        <div className="linkDate">
                           <div id="link"><Link to="/Edit">View Details</Link>
                        </div>
                        <div id="date">
                            17/11/2001  &emsp; 17/11/2050
                        </div>

                        </div>
                        </div>
                        </div>

                        <div id="container_2">
                        <div id="text">
                        <h5>Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</h5>
                            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                        </div>
                       <div className="linkDate">
                           <div id="link"><Link to="/Edit">View Details</Link>
                        </div>
                        <div id="date">
                            17/11/2001  &emsp; 17/11/2050   
                        </div>

                        </div>
 
                    </div>
                    </div>
                    <div className="load">
                         <Link to="/Loadmore">
                              <button id="load">Load More</button>
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
    );
}

export default MyBucket;
