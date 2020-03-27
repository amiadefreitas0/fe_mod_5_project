import React from 'react';
import {Link} from "react-router-dom";
import NavBarContainer from '../containers/nav_bar_container';


class LoginFormComponent extends React.Component {
  
    render() { 
        return (  
            <div>            
                
                <span className='open-nav'onClick={this.props.openNav}>&#9776;</span>

                <NavBarContainer navButtons ={this.props.navButtons} closeNav ={this.props.closeNav}/>
                    
                    <form onSubmit = {this.props.handleLoginForm} class="ui form">
                    <div class="field">
                    <input placeholder="First Name" id='username' onChange ={this.props.handleOnChangeForm }/>
                    </div>
                    <div class="password-field">
                    <input id ='password' onChange ={this.props.handleOnChangeForm }placeholder="Password" />
                    </div>
                    
                    
                    <button type="submit" class="ui button">Submit</button>
                                <Link to ='/signup'>
                                    <button>Signup</button>
                                
                                </Link>
                </form>
         </div>
        );
    }
}
 
export default LoginFormComponent;