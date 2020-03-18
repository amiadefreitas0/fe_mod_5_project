import React from 'react';
import LoginForm from '../components/login_form_component'

class LoginContainer extends React.Component {
  
    render() { 
        return (
           <div className='login-container'>
               <LoginForm handleLoginForm={this.props.handleLoginForm}handleOnChangeForm={this.props.handleOnChangeForm}/>
           </div>


         )
    }
}
 
export default LoginContainer;