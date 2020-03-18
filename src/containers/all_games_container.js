import React from 'react';
import GameCard from '../components/game_card_component'
import NavBarContainer from './nav_bar_container';

class AllGamesContainer extends React.Component {
  
    render() { 
        console.log(this.props)
        return (
            <div> 
                <NavBarContainer />
                <h2>All Games</h2>
                {this.props.gamesArray.map((game)=>{
                    return <GameCard handleplaygame = {this.props.handlePlayGame} gameObj = {game} />
                })}
               
                
                </div> 



         )
    }
}
 
export default AllGamesContainer;