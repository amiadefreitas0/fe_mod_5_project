import React from 'react';
import NavBarContainer from './nav_bar_container';
import ReviewContainer from './reviews_container';
import {Redirect } from "react-router-dom";

class ShowGameContainer extends React.Component {

    state={
        reviews:null,
        reviewFormDisplay:false,
        currentUser:true,
        new_review: null
       
    }
  
   
    componentDidMount(){ 
        if (this.props.gameObj){
            let gameId = this.props.gameObj.id
            fetch(`http://localhost:3000/reviews/game/${gameId}`)
            .then(resp => resp.json())
            .then(r => this.setState({reviews:r}))



        } else{
           return null
        }

    }


   

  


    render() {
       debugger
        { if (this.props.gameObj){

           return (
               <div>

                <span className='open-nav'onClick={this.props.openNav}>&#9776;</span>



              
               <div className = 'show-game'>
                

                       <NavBarContainer  closeNav ={this.props.closeNav} logoutbtn ={this.props.logoutbtn}  currentUser ={this.props.currentUser} navButtons={this.props.navButtons}/>
                       <h2 className ='game-name'>{this.props.gameObj.title}</h2> 
                       <iframe className='play-game'src={this.props.gameObj.game_src} width="800" height="600" scrolling="none" frameborder="0"></iframe>
                       
                      
                       <div class="ui fluid card" id='game-desc'>
                        <div class="content">
                            <div class="header">{this.props.gameObj.title}</div>
                        </div>
                        <div class="content">
                            <div class="header">Rating: {this.props.gameObj.game_rating}</div>
                        </div>
                        <div class="content">
                            <div class="header">Category: {this.props.gameObj.categories[0].name}</div>
                        </div>
                            <div class="content">
                                <div class="description">
                                    {this.props.gameObj.description}
                                </div>
                            </div>
                            <div class="content">
                                {
                                    this.props.reviews?
                                    <ReviewContainer gameObj={this.props.gameObj} redirect ={this.props.redirect}handleClickNewReview={this.props.handleClickNewReview}currentUser ={this.props.currentUser}postAComment = {this.props.postAComment} reviewFormDisplay={this.props.reviewFormDisplay} reviewFormToggle = {this.props.reviewFormToggle}reviews ={this.props.reviews}/>:
                                    <ReviewContainer gameObj={this.props.gameObj} redirect ={this.props.redirect}handleClickNewReview={this.props.handleClickNewReview}currentUser ={this.props.currentUser}postAComment = {this.props.postAComment} reviewFormDisplay={this.props.reviewFormDisplay} reviewFormToggle = {this.props.reviewFormToggle}reviews ={this.state.reviews}/>
                                }

                            </div>
                                <div class ='extra content'>
                                    <div class="ui buttons">
                                        <button class ="ui green inverted button" onClick = {(event, gameId = this.props.gameObj.id)=>this.props.clickSaveGame(event,gameId)}>Save Game</button>
                                    </div>
                                </div>

                        </div>
               </div> 
            </div>
            

           )


       }else{

           return( "there is no game")}
       }
        
    }
}
 
export default ShowGameContainer;