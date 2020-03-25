import React from 'react';
import {Link} from "react-router-dom";
import LoggedIn from '../components/login_component';
import LoginBtn from '../components/loginbtn';

class NavBarContainer extends React.Component {

    state={
        loggedin: false 
    }

    

    render() { 
        
        return ( 
            <div className ='nav-bar'>
                <Link to ='/games'>
                    <button className='nav-button' onClick={this.props.navButtons}> All Game</button>
                
                </Link>

                <Link to = '/collection'>
                    <button className='nav-button' onClick={this.props.navButtons}> Collection </button>

                </Link>
                {
                    this.props.currentUser?
                    <LoggedIn currentUser ={this.props.currentUser}/> : <LoginBtn />
                }
               
                   

            </div>


         );
    }
}
 
export default NavBarContainer;