import React, { Component } from 'react';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Chen Xingxu',
            age: 23,
            isLoggedIn: false,
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleLog = this.handleLog.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMouseOver() {
        console.log('Mouse is over the image')
    }

    handleLog() {
        this.setState(prevState => {
            return {
                isLoggedIn: prevState.isLoggedIn ? false : true
            }
        });
    }

    render() {
        const styles = { padding: '30px' };

        return (
            <footer style={styles}>
                <img alt='ChenXingxu' style={{ width: '160px' }} src='/img/ChenXingxu.jpeg'
                    onMouseOver={this.handleMouseOver} />
                <p>{this.state.name} is {this.state.age} years old.</p>


                <p>You are currently logged {this.state.isLoggedIn ? 'in' : 'out'}.</p>
                <button onClick={this.handleLog}>Log {this.state.isLoggedIn ? 'Out' : 'In'}</button>



                <h1>You clicked {this.state.count} times</h1>
                <button onClick={this.handleClick}>Click me</button>
            </footer >
        );
    }
}
export default Footer;