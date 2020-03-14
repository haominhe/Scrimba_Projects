import React from 'react';

function TodoItem(props) {
    return (
        <div className='todo-item'>
            <img alt={props.person.name} style={{ height: '160px' }} src={props.person.imgURL} />
            <h3>{props.person.name}</h3>
            <input type='checkbox' id={props.person.name} name={props.person.name} checked={props.person.completed}/>
            <label htmlFor={props.person.name}>{props.person.name}</label>
        </div>
    )
} export default TodoItem;