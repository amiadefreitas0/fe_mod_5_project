import React from 'react';
import SignupFormComponent from '../components/signup_form_component'

class SignupContainer extends React.Component {
 
  
    render() { 
        return (
            <div className = 'signup-container'>
                <SignupFormComponent handleOnChangeForm ={this.props.handleOnChangeForm}handleSignupForm ={this.props.handleSignupForm}/>
            </div> 


         )
    }
}
 
export default SignupContainer;