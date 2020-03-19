import React, { Component } from 'react';
import FormContainer from './FormContainer';

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
    render() {
        return (
            <FormContainer />
        )

    }
} export default Navbar;