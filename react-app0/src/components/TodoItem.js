import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
        const styles = {
            fontStyle: 'italic',
            color: '#cdcdcd',
            textDecoration: 'line-through'
        }

        return (
            <div className='todo-item'>
                <img alt={this.props.person.name} style={{ height: '160px' }} src={this.props.person.imgURL} />
                <h3>{this.props.person.name}</h3>

                <input type='checkbox'
                    id={this.props.person.name}
                    name={this.props.person.name}
                    checked={this.props.person.completed}
                    onChange={() => this.props.handleChange(this.props.person.id)} />
                    
                <label htmlFor={this.props.person.name}
                    style={this.props.person.completed ? styles : null}>
                    {this.props.person.name}</label>
            </div>
        )
    }
} export default TodoItem;