import React from 'react';
import GameCard from '../components/game_card_component'
import NavBarContainer from './nav_bar_container';
import CategoriesContainer from './categories_container';
import LoggedIn from '../components/login_component';
import LoginBtn from '../components/loginbtn';

class AllGamesContainer extends React.Component {
  
    render() { 
       
        return (
            <div className ='all-games'> 

            <span className='open-nav'onClick={this.props.openNav}>&#9776;</span>

            {
                    this.props.currentuser?
                    <LoggedIn  logoutbtn ={this.props.logoutbtn}currentUser ={this.props.currentuser}/> : <LoginBtn navBtn ={this.props.navButtons}/>
                }
                <NavBarContainer closeNav ={this.props.closeNav} logoutbtn ={this.props.logoutbtn} currentUser ={this.props.currentuser} navButtons ={this.props.navButtons}/>
           
        <h2>{!this.props.category? 'ALL GAMES' : this.props.category.toUpperCase()}</h2>
        <div className='category-container'>

        <CategoriesContainer handleCategoryButton={this.props.handleCategoryButton}/>

        </div>
                <div className = 'games-container'>
                    {this.props.gamesArray.map((game)=>{
                        return <GameCard  key ={game.id}handleplaygame = {this.props.handlePlayGame} gameObj = {game} />
                    })}


                </div>
               
                
            </div> 



         )
    }
}
 
export default AllGamesContainer;