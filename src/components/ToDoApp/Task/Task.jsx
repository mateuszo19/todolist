import React from 'react';
import './Task.css';

export const Task = (props) => {
    let importantStyle = {color: "black"};

    if(props.important){
        importantStyle = {
            color: "red",
            fontWeight: "bold"
        }
    }

    return(
        <>
            <div className="singleTask">
                <h3 style={importantStyle}>{props.text}</h3>
                <p>Finish date: {props.date}</p>
                {!props.active ? <p>Confirmation of execution : {props.finishDate}</p> : null}
                {props.active ? <button onClick={() => props.change(props.id)}>Zostało zrobione</button> : null}
                <button onClick={() => props.delete(props.id)}>X</button>
            </div>

        </>
    )
}
