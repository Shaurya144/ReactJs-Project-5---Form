import React, { Component } from 'react';

export class UserForm extends Component {
    state = { 
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city:"",
    } 

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    nextStep = () => {
        const{step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const{step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    render() { 
        const { step } = this.step;
        const { firstName, lastName, email, occupation, city} = this.state;
        const values = { firstName, lastName, email, occupation, city }

        switch(step){
            case 1:
                return (
                    <div></div>
                );

        }
        return (
            <div>

            </div>
        );
    }
}
 
export default UserForm;