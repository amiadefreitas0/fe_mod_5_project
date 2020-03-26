import React from 'react';
import GameCard from '../components/game_card_component'
import NavBarContainer from './nav_bar_container';
import CategoriesContainer from './categories_container';

class AllGamesContainer extends React.Component {
  
    render() { 
       
        return (
            <div className ='all-games'> 
                <NavBarContainer  logoutbtn ={this.props.logoutbtn} currentUser ={this.props.currentuser} navButtons ={this.props.navButtons}/>
           
        <h2>{!this.props.category? 'ALL GAMES' : this.props.category.toUpperCase()}</h2>
        <CategoriesContainer handleCategoryButton={this.props.handleCategoryButton}/>
                {this.props.gamesArray.map((game)=>{
                    return <GameCard  key ={game.id}handleplaygame = {this.props.handlePlayGame} gameObj = {game} />
                })}
               
                
            </div> 



         )
    }
}
 
export default AllGamesContainer;