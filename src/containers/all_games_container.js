import React from 'react';
import GameCard from '../components/game_card_component'

class AllGamesContainer extends React.Component {
  
    render() { 
        console.log(this.props)
        return (
            <div> 
                {this.props.gamesArray.map((game)=>{
                    return <GameCard handleplaygame = {this.props.handlePlayGame} gameObj = {game} />
                })}
                this is the all games container
                
                </div> 



         )
    }
}
 
export default AllGamesContainer;