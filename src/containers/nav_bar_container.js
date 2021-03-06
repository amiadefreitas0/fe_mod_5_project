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
                {
                    this.props.currentUser?
                    <LoggedIn  logoutbtn ={this.props.logoutbtn}currentUser ={this.props.currentUser}/> : <LoginBtn navBtn ={this.props.navButtons}/>
                }
                  <a href="javascript:void(0)" class="closebtn" onClick={this.props.closeNav}>&times;</a>

                <Link to ='/games'>
                    <button id='all-games-btn'className='nav-button' onClick={this.props.navButtons}> All Game</button>
                
                </Link>

                <Link to = '/collection'>
                    <button id='collection-btn' className='nav-button' onClick={this.props.navButtons}> Collection </button>

                </Link>
               
                   

            </div>


         );
    }
}
 
export default NavBarContainer;