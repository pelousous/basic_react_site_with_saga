import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("passwords are not the same!!");
            return false;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
        } catch(err) {
            console.log(err);
        }

        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    render() {
        return(
            <div className='sign-up'>
                <h2 className="title"> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text" 
                        name="displayName"
                        label="name"
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="text" 
                        name="email"
                        label="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    /> 
                     <FormInput
                        type="password" 
                        name="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />   
                    <FormInput
                        type="password" 
                        name="confirmPassword"
                        label="confirmPassword"
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        required
                    /> 
                    <CustomButton type="submit">Sign Up</CustomButton>                
                </form>
            </div>
        )
    }
}

export default SignUp;