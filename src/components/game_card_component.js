import React from 'react';
import DeleteBtn from './deletebtn'

class GameCard extends React.Component {
  
    render() { 

        
        return ( 
            <div class="ui six cards">
                <div class="ui raised card">
                    <div class="content">
                        <img onClick ={(event, gameId = this.props.gameObj.id) =>{
                
                     return this.props.handleplaygame(event, gameId)}}class=" ui image" src ={this.props.gameObj.img_src} />
                        <div onClick ={(event, gameId = this.props.gameObj.id) =>{
                
                       return this.props.handleplaygame(event, gameId)}} class="header">
                        {this.props.gameObj.title}
                        </div>
                        {this.props.deletebtn?
                    
                       <DeleteBtn gameId = {this.props.gameObj.id} currentUser ={this.props.currentUser} unsavegame={this.props.unsavegame}/>: null}
                       
                    </div>
                </div>
            </div>


            // <div className ='game-card'>
            //     <img className = 'game-img' src ={this.props.gameObj.img_src} onClick ={(event, gameId = this.props.gameObj.id) =>{
                
            //     return this.props.handleplaygame(event, gameId)}}></img>
            //     <div className = 'game-name' onClick ={(event, gameId = this.props.gameObj.id) =>{
                
            //     return this.props.handleplaygame(event, gameId)}}>{this.props.gameObj.title}</div>
            //     {this.props.deletebtn?
                    
            //         <DeleteBtn gameId = {this.props.gameObj.id} currentUser ={this.props.currentUser} unsavegame={this.props.unsavegame}/>: null}

            // </div> 

         )
    }
}
 
export default GameCard;