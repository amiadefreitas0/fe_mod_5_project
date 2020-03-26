import React from 'react';
import NavBarContainer from '../containers/nav_bar_container';


class SignupFormComponent extends React.Component {

    
  
    render() { 
        return ( 
        <div>
            <NavBarContainer />
                <form onSubmit = {this.props.handleSignupForm}> 
                        <label for="name">Name:</label>
                        <input type = 'text' id = 'name' onChange ={this.props.handleOnChangeForm }/><br></br>
                        <label for="name"  >Username:</label>
                        <input type = 'text' id ='username'onChange ={this.props.handleOnChangeForm }/><br></br>
                        <label for="name">Password:</label>
                        <input type = 'password' id = 'password' onChange ={this.props.handleOnChangeForm }/><br></br>
                        <button type="submit" value="Submit">Submit</button>
                </form> 
        
        </div> 
        );
    }
}
 
export default SignupFormComponent;