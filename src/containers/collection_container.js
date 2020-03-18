import React from 'react';
import GameCard from '../components/game_card_component';
import NavBarContainer from './nav_bar_container';

class CollectionContainer extends React.Component {
  
    render() { 
        return (
            <div className = 'collection-container'> 
            <NavBarContainer />
            <h2> User Collections</h2>
              {this.props.collection?
                  this.props.collection.map((game)=>{
                    return <GameCard handleplaygame = {this.props.handlePlayGame} gameObj = {game}/>

                  }): "no games in your collection"
              }
            
            
            </div> 


         )
    }
}
 
export default CollectionContainer;