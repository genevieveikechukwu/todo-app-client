import React from "react";
import "../App.css";

function Item({text, remove, update}) {
    return (
        <div className="item">
            <div id="description" className="text">
              {text}
            </div>
            <button className="btn edit">
                <i className="fa fa-edit" onClick={update}></i>
            </button>
            <button className="btn trash">
                <i className="fa fa-trash" onClick={remove}></i>
            </button>
        </div>
            )
            
}

export default Item