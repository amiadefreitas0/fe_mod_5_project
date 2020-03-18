import React from 'react';


class LoginFormComponent extends React.Component {
  
    render() { 
        return (  
        <form onSubmit = {this.props.handleLoginForm}> 
               
                <label for="name">Username:</label>
                <input type = 'text' id='username' onChange ={this.props.handleOnChangeForm }/><br></br>
                <label for="name">Password:</label>
                <input type = 'text' id ='password' onChange ={this.props.handleOnChangeForm }/><br></br>
                <button type="submit" value="Submit">Submit</button>
        </form> 
        );
    }
}
 
export default LoginFormComponent;