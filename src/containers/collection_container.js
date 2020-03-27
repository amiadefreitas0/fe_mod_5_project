import React from 'react';
import GameCard from '../components/game_card_component';
import NavBarContainer from './nav_bar_container';
import LoggedIn from '../components/login_component';
import LoginBtn from '../components/loginbtn';

class CollectionContainer extends React.Component {

  state={
    deletebtn: true
  }
  
    render() { 
        return (
            <div className = 'collection-container'>
            <span className='open-nav'onClick={this.props.openNav}>&#9776;</span>
            {
                    this.props.currentUser?
                    <LoggedIn  logoutbtn ={this.props.logoutbtn}currentUser ={this.props.currentUser}/> : <LoginBtn navBtn ={this.props.navButtons}/>
                }
            <NavBarContainer closeNav={this.props.closeNav}navButtons ={this.props.navButtons}logoutbtn ={this.props.logoutbtn}currentUser ={this.props.currentUser}/>
            <h2> User Collections</h2>
              {this.props.collection?
                  this.props.collection.map((game)=>{
                    return <GameCard currentUser ={this.props.currentUser}unsavegame = {this.props.unsavegame}deletebtn = {this.state.deletebtn}handleplaygame = {this.props.handlePlayGame} gameObj = {game}/>

                  }): "no games in your collection"
              }
            
            
            </div> 


         )
    }
}
 
export default CollectionContainer;