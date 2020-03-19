import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Joke from './Joke';
import Product from './Product';
import vschoolProducts from './vschoolProducts';
import todosData from './todosData';
import todosDataJoke from './todosDataJoke';

class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            products: vschoolProducts,
            todos: todosData,
            todoJokes: todosDataJoke,
            swPerson: {},
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = todo.completed ? false : true;
                }
                return todo;
            })
            return {
                todos: updatedTodos
            }
        })
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('https://swapi.co/api/people/1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    swPerson: data,
                    isLoading: false
                })
            })


    }

    render() {
        const productComponents = this.state.products.map(item => {
            return <Product key={item.id} product={item} />
        })

        const todoComponents = this.state.todos.map(item => {
            const found = this.state.todoJokes.find(element => element.id === item.id);
            return (
                <div key={item.id}>
                    <TodoItem person={item} handleChange={this.handleChange} />
                    <Joke question={found.question} punchLine={found.punchLine} />
                </div>
            )
        })

        return (
            <div className='todo-list'>

                {this.state.isLoading ? <h2>Loading...</h2> : <p>Star War: {this.state.swPerson.name}</p>}

                {productComponents}

                {todoComponents}

            </div>
        );
    }
}
export default MainContent;