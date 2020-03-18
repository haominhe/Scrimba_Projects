import React, { Component } from 'react';

// function Navbar() {
//     const fname = 'Minnie';
//     const lname = 'Disney';

//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;
//     const styles = {
//         backgroundColor: '#D3D3D3',
//         fontSize: '30px'
//     }


//     if (hours < 12) {
//         timeOfDay = 'morning';
//         styles.color='#04756F';
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = 'afternoon';
//         styles.color='#8914A3';
//     } else {
//         timeOfDay = 'night';
//         styles.color='#D90000';
//     }


//     return (
//         <div>
//             <header className='navbar'>This is {`${fname} ${lname}`} :) Good {timeOfDay}!</header>
//             <h1 style={styles}>I miss Mickey.</h1>
//         </div >
//     );
// }
// export default Navbar;


class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            isFriendly: false,
            gender: 'male',
            favColor: 'blue'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
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
                <header className='navbar'>This is {`${fname} ${lname}`} :) Good {timeOfDay}!</header>
                <h1 style={styles}>I miss Mickey.</h1>

                <form>
                    <input type='text' value={this.state.firstName} name='firstName' placeholder='First Name' onChange={this.handleChange} />
                    <br />
                    <input type='text' value={this.state.lastName} name='lastName' placeholder='Last Name' onChange={this.handleChange} />
                    <br />
                    <textarea onChange={this.handleChange} />
                    <br />
                    <label><input type='checkbox' name='isFriendly' checked={this.state.isFriendly} onChange={this.handleChange} />Is friendly?</label>
                    <br />
                    <label><input type='radio' name='gender' value='male' checked={this.state.gender === 'male'} onChange={this.handleChange} />Male</label>
                    <br />
                    <label><input type='radio' name='gender' value='female' checked={this.state.gender === 'female'} onChange={this.handleChange} />Female</label>
                    <br />
                    <label>Favorite Color: </label>
                    <select value={this.state.favColor} name='favColor' onChange={this.handleChange} >
                        <option value='blue'>Blue</option>
                        <option value='green'>Green</option>
                        <option value='red'>Red</option>
                        <option value='orange'>Orange</option>
                        <option value='yellow'>Yellow</option>
                    </select>


                    <h2>{this.state.firstName} {this.state.lastName}</h2>
                    <h2>You are a {this.state.gender}.</h2>
                    <h2>Your favorite color is {this.state.favColor}.</h2>
                    <button>Submit</button>
                </form>
            </div >
        );
    }
} export default Navbar;