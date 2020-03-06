import React from 'react';

function TodoItem(props) {
    return (
        <div className='todo-item'>
            <img alt={props.person.name} style={{width:'160px'}} src={props.person.imgURL} />
            <h3>{props.person.name}</h3>
            <input type="checkbox" id={props.person.name} name={props.person.name} />
            <label for={props.person.name}>{props.person.name}</label>
        </div>
    )
} export default TodoItem;