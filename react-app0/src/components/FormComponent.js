import React from 'react';
import MemeGenerator from './MemeGenerator';

function FormComponent(props) {
    const fname = 'Minnie';
    const lname = 'Disney';

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        backgroundColor: '#D3D3D3',
        fontSize: '30px'
    }


    if (hours < 12) {
        timeOfDay = 'morning';
        styles.color = '#04756F';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon';
        styles.color = '#8914A3';
    } else {
        timeOfDay = 'night';
        styles.color = '#D90000';
    }

    return (
        <div>
            <header className='navbar'>
            <img src='/img/ChenXingxu.jpeg' alt='ChenXingxu' />
            <p>Meme Generator</p>
            </header>
            <MemeGenerator />


            <header className='navbar'>
            This is {`${fname} ${lname}`} :) Good {timeOfDay}!
            </header>

            <h1 style={styles}>I miss Mickey.</h1>

            <form >
                <input type='text' value={props.data.firstName} name='firstName' placeholder='First Name' onChange={props.handleChange} />
                <br />
                <input type='text' value={props.data.lastName} name='lastName' placeholder='Last Name' onChange={props.handleChange} />
                <br />
                <input type='number' value={props.data.age} name='age' placeholder='Age' onChange={props.handleChange} />
                <br />
                <textarea onChange={props.handleChange} />
                <br />
                <label><input type='radio' name='gender' value='male' checked={props.data.gender === 'male'} onChange={props.handleChange} />Male</label>
                <br />
                <label><input type='radio' name='gender' value='female' checked={props.data.gender === 'female'} onChange={props.handleChange} />Female</label>
                <br />
                <label>Favorite Places: </label>
                <select value={props.data.favPlace} name='favPlace' onChange={props.handleChange} >
                    <option value=''>Please choose a place</option>
                    <option value='Atlanta'>Atlanta</option>
                    <option value='New York'>New York</option>
                    <option value='Portland'>Portland</option>
                    <option value='Tokyo'>Tokyo</option>
                    <option value='Boston'>Boston</option>
                </select>
                <br />
                <label><input type='checkbox' name='vegetarian' checked={props.data.vegetarian} onChange={props.handleChange} />Is vegetarian?</label>
                <br />
                <label><input type='checkbox' name='kosher' checked={props.data.kosher} onChange={props.handleChange} />Is kosher?</label>
                <br />
                <label><input type='checkbox' name='lactoseFree' checked={props.data.lactoseFree} onChange={props.handleChange} />Is lactose free?</label>

                <h2>{props.data.firstName} {props.data.lastName}</h2>
                <h2>You are a {props.data.gender}.</h2>
                <h2>Your favorite place is {props.data.favPlace}.</h2>
                <button onClick={props.handleSubmit}>Submit</button>
            </form>
        </div >
    );
} export default FormComponent;