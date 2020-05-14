import React from 'react';

import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name}, {props.age} year's old</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Person;