import React, { Component } from 'react';
import {Link} from "react-router-dom";

class LoginBtn extends Component {
 
    render() { 
        return (  
            <div>
                <Link to ='/login'>
                <button className='login-btn' onClick={this.props.navBtn}> Login </button>
                </Link>
                 
                <Link to='/signup'>
                <button className='login-btn' onClick={this.props.navBtn}> Signup </button>
                </Link>
            </div>
        );
    }
}
 
export default LoginBtn;