import React from 'react';
import LoginForm from '../components/login_form_component'

class LoginContainer extends React.Component {
  
    render() { 
        return (
           <div className='login-container'>
               <LoginForm openNav ={this.props.openNav}closeNav ={this.props.closeNav} handleLoginForm={this.props.handleLoginForm}handleOnChangeForm={this.props.handleOnChangeForm}navButtons ={this.props.navButtons}/>
           </div>


         )
    }
}
 
export default LoginContainer;