import React from 'react';
import TodoItem from './TodoItem';
import Joke from './Joke';
// import jokesData from './jokesData';
import Product from './Product';
import vschoolProducts from './vschoolProducts';
import todosData from './todosData';
import todosDataJoke from './todosDataJoke';

function MainContent() {
    // const jokeComponents = jokesData.map(joke => {
    //     return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    // })

    const productComponents = vschoolProducts.map(item => {
        return <Product key={item.id} product={item} />
    })

    const todoComponents = todosData.map(item => {
        const found = todosDataJoke.find(element => element.id === item.id);
        return (
            <div key={item.id}>
                <TodoItem  person={item} />
                <Joke question={found.question} punchLine={found.punchLine} />
            </div>
        )
    })

    return (
        <div className='todo-list'>
            {/* <main>This is my MainContent element</main> */}
            {/* {jokeComponents} */}

           
            {productComponents}

            {todoComponents}

        </div>
    );
}
export default MainContent;