import React from "react";
import "../App.css";
import { useState } from "react";

/* To handle todos as completed, create a reactState on them
   call an axios request that returns the status of the clicked item
   set the status value to be true
   call the value on clicked
   remove the edit button through styling by setting display to none
*/

function Item({id, text, remove, update}) {

    const [status, setStatus] = useState(false);
    
    const handleClick = () => {
        setStatus(true);
    };

    return (
        <div className="item">
            <div id="description" className="text">
                {text}

            </div>
                <div className="icons">
                <i className="fa fa-edit" onClick={update} style={{ display: status ? "none" : "in-line" }}>{ id}</i>
                <i className="fa fa-trash" onClick={remove}>{ id}</i>
                    <i className="fa fa-check-square-o" onClick={handleClick}></i>
                </div>


        </div>
            )
            
}

export default Item