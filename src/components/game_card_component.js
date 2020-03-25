import React from 'react';
import DeleteBtn from './deletebtn'

class GameCard extends React.Component {
  
    render() { 

        
        return ( 
            
            <div className ='game-card'>
                <div className = 'game-name' onClick ={(event, gameId = this.props.gameObj.id) =>{
                
                return this.props.handleplaygame(event, gameId)}}>{this.props.gameObj.title}</div>
                <img className = 'game-img' src ={this.props.gameObj.img_src} onClick ={(event, gameId = this.props.gameObj.id) =>{
                
                return this.props.handleplaygame(event, gameId)}}></img>
                {this.props.deletebtn?
                    
                    <DeleteBtn gameId = {this.props.gameObj.id} currentUser ={this.props.currentUser} unsavegame={this.props.unsavegame}/>: null}

            </div>

         )
    }
}
 
export default GameCard;