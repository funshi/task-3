import React from 'react'
import "../styles/New.css"

function New() {
    return (
        <div>
            <form className="add-memory">
                <div className="one">
                    <label style={{fontSize:"smaller",marginLeft:"60px"}}>Date in the Future</label> <br />
                    <input className="one_1" type="text" placeholder="" />
                </div>
                <div className="two">
                    <label style={{fontSize:"smaller",marginLeft:"60px"}}>Title</label> <br />
                    <input className="two_2" type="text" placeholder="" />
                </div>
                <div className="three">
                    <label style={{fontSize:"smaller",marginLeft:"60px"}}>Details</label> <br />
                    <input className="three_3" type="text" placeholder="" />
                </div>
                <input className="save" type="submit" />
            </form>
        </div>
    )
}

export default New
