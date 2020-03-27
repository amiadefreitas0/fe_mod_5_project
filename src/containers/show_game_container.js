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


    reviewFormToggle=(event)=>{
        
        if (this.state.reviewFormDisplay == false){
            this.setState({
                reviewFormDisplay: true
            })

        }else{
            this.setState({
                reviewFormDisplay: false

            })
        }

    }

    postAComment = (event, review)=>{
        
        if (this.props.currentUser ){
            this.setState({
                currentUser:true
            })
            let gameId = this.props.gameObj.id
        
            let new_review ={text: review, game_id: gameId, user_id:this.props.currentUser.id}
            fetch(`http://localhost:3000/reviews`,{
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: JSON.stringify(new_review)
            })
            .then(r =>r.json())
            .then(data=>{
                this.setState({reviews:[...this.state.reviews,data]})
            })
        }else{
            this.setState({
                currentUser:false
            })
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
                       
                      
                       <div class="ui card">
                        <div class="content">
                            <div class="header">{this.props.gameObj.title}</div>
                        </div>
                        <div class="content">
                            <div class="header">Rating:{this.props.gameObj.game_rating}</div>
                        </div>
                        <div class="content">
                            <div class="header">Category:{this.props.gameObj.categories[0].name}</div>
                        </div>
                            <div class="content">
                                <div class="description">
                                    {this.props.gameObj.description}
                                </div>
                            </div>
                            <div class="content">
                                <ReviewContainer currentUser ={this.props.currentUser}postAComment = {this.postAComment} reviewFormDisplay={this.state.reviewFormDisplay} reviewFormToggle = {this.reviewFormToggle}reviews ={this.state.reviews}/>

                            </div>
                            <div class ='extra content'>
                            <button class ="ui green basic button"onClick = {(event, gameId = this.props.gameObj.id)=>this.props.clickSaveGame(event,gameId)}className="save-button">Save Game</button>

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