import React from 'react';
import GameCard from '../components/game_card_component'
import NavBarContainer from './nav_bar_container';
import CategoriesContainer from './categories_container';

class AllGamesContainer extends React.Component {
  
    render() { 
       
        return (
            <div> 
                <NavBarContainer currentUser ={this.props.currentuser} navButtons ={this.props.navButtons}/>
                <CategoriesContainer handleCategoryButton={this.props.handleCategoryButton}/>
           
        <h2>{!this.props.category? 'ALL GAMES' : this.props.category.toUpperCase()}</h2>
                {this.props.gamesArray.map((game)=>{
                    return <GameCard  key ={game.id}handleplaygame = {this.props.handlePlayGame} gameObj = {game} />
                })}
               
                
            </div> 



         )
    }
}
 
export default AllGamesContainer;