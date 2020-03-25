import React from 'react';
import NavBarContainer from './nav_bar_container';
import ReviewContainer from './reviews_container';


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
    
               <div className = 'show-game'>
                   
                       <NavBarContainer navButtons={this.props.navButtons}/>
                       <h2 className ='game-name'>{this.props.gameObj.title}</h2> 
                       <iframe className='play-game'src={this.props.gameObj.game_src} width="800" height="600" scrolling="none" frameborder="0"></iframe>
                       <div> rating:{this.props.gameObj.game_rating} </div>
                       <div> category:{this.props.gameObj.categories[0].name} </div>
                       <h2> Description:</h2>
                       <div className ='game-description'>{this.props.gameObj.description}</div> 
                       <button onClick = {(event, gameId = this.props.gameObj.id)=>this.props.clickSaveGame(event,gameId)}className="save-button">Save Game</button>
                       <ReviewContainer currentUser ={this.props.currentUser}postAComment = {this.postAComment} reviewFormDisplay={this.state.reviewFormDisplay} reviewFormToggle = {this.reviewFormToggle}reviews ={this.state.reviews}/>
                       
               </div> 


           )


       }else{

           return( "there is no game")}
       }
        
    }
}
 
export default ShowGameContainer;