import React from 'react';


class GameCard extends React.Component {
  
    render() { 

        
        return ( 
            
            <div className ='game-card' onClick ={(event, gameId = this.props.gameObj.id) =>{
                
                return this.props.handleplaygame(event, gameId)}}>
                <div className = 'game-name'>{this.props.gameObj.title}</div>
                <img className = 'game-img' src ={this.props.gameObj.img_src}></img>


            </div>

         )
    }
}
 
export default GameCard;