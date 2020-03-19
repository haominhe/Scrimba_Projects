import React, { Component } from 'react';
import FormComponent from './FormComponent';

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            vegetarian: false,
            kosher: false,
            lactoseFree: false,
            gender: '',
            favPlace: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit() {
        alert('First Name: ' + this.state.firstName)
    }

    render() {
        return (
            <FormComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit} data={this.state} />
        )
    }
} export default FormContainer;