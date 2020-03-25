import React, { Component } from 'react';
import {Link} from "react-router-dom";

class DeleteBtn extends Component {
 
    render() { 
        return (  
            <div>
               
                <button onClick={(event,userId = this.props.currentUser, gameId = this.props.gameId)=>this.props.unsavegame(event,userId, gameId)}> 🗑 </button>
                
            </div>
        );
    }
}
 
export default DeleteBtn;