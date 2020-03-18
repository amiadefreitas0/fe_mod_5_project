import React from 'react';
import {Link} from "react-router-dom";

class NavBarContainer extends React.Component {

    render() { 
        return ( 
            <div className ='nav-bar'>
                <Link to ='/games'>
                    <button className='nav-button' onClick={this.props.navButtons}> All Game</button>
                
                </Link>

                <Link to = '/collection'>
                    <button className='nav-button' onClick={this.props.navButtons}> Collection </button>

                </Link>



            </div>


         );
    }
}
 
export default NavBarContainer;