import React from 'react';
import TodoItem from './TodoItem';
import Joke from './Joke';

function MainContent() {
    return (
        <div className='todo-list'>
            <main>This is my MainContent element</main>
            <TodoItem
                person={{ name: 'SailorMoon', imgURL: '/img/sailorMoon.jpg' }} />
            <Joke question='Who do you love?' punchLine='Tuxedo Mask.' />
            <TodoItem
                person={{ name: 'Goofy', imgURL: '/img/Goofy.jpg' }} />
            <Joke question='What are you?' punchLine='Doggie.' />

            <TodoItem
                person={{ name: 'Ariel', imgURL: '/img/Ariel.jpg' }} />
            <Joke  punchLine='Fishes.' />

            <TodoItem
                person={{ name: 'Cinderella', imgURL: '/img/Cinderella.jpeg' }} />
            <Joke question='What is your car?' punchLine='Pumpkin.' />

        </div>
    );
}
export default MainContent;