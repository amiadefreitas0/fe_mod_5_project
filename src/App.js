import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import './App.css';
import HomeContainer from './containers/home_container'
import AllGamesContainer from './containers/all_games_container'
import CollectionContainer from './containers/collection_container'
import ShowGameContainer from './containers/show_game_container';
import CreatorContainer from './containers/creator_container';
import LoginContainer from './containers/login_container';
import SignupContainer from './containers/signup_container';
import NavBarContainer from './containers/nav_bar_container';



class App extends React.Component {
  state = {
    current_user:null,
    loading: true,
    all_games: [],
    playing_game: null,
    name:null,
    username:null,
    password:null,
    user_collection:null
    }


    componentDidMount(){
      fetch('http://localhost:3000/games')
      .then(r => r.json())
      .then(resp => {
        this.setState({
          all_games: resp,
          loading: false
        })
      })
    }

    handlePlayGame =(e, gameId)=>{
      
      this.setState({
        playing_game: gameId
      })

    }


    handleOnChangeForm = (event)=>{
        
      const stateKey = event.target.id
      const formValue = event.target.value
      this.setState({
          [stateKey]: formValue
      })

     }


    fetchUserCollection= () =>{
      debugger
      fetch(`http://localhost:3000/collections/${this.state.current_user.id}`)
      .then(r=> r.json())
      .then(resp =>{
        this.setState({
          user_collection: resp
        })
      })

    }



    handleSignupForm = (e)=>{
      e.preventDefault()

      const newUser ={name: this.state.name, username: this.state.username, password: this.state.password}
      
      fetch('http://localhost:3000/users',{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser)
      })
      .then(resp => resp.json())
      .then(r =>{
          this.setState({
            current_user: r
          })
      } )
      
    }

    handleLoginForm = (e)=>{
      e.preventDefault()
      const newUser ={ username: this.state.username, password: this.state.password}
      
      
      fetch('http://localhost:3000/login',{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(resp =>resp.json())
      .then(r =>{
        
        if(r.successful){
          let user = r.data
          localStorage.setItem('jwt', r.token)
          this.setState({
            current_user: user
          })
          this.fetchUserCollection()
        }else{
          alert(r.message)
        }
      } )
      
    }
    clickSaveGame=(event,gameId)=>{
      debugger
      if (this.state.current_user){
       let new_collection = {user_id: this.state.current_user.id, game_id:gameId}
        fetch(`http://localhost:3000/collections`,{
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(new_collection)
        }).then(r=>r.json())
        .then(r=>{
          debugger
          fetch(`http://localhost:3000/games/${r.game_id}`)
          .then(r=>r.json())
          .then(resp =>{
            debugger
            this.setState({
              user_collection:[...this.state.user_collection, resp]
            })
          })
      })

      }

    }

    navButtons=()=>{

      this.setState({
        playing_game:null
      })
    }

    




  render() { 
    console.log(this.state.current_user)
    return (  

      <div>
        {!this.state.loading?


      <Router>
          <Switch>

            
            <Route exact path ='/games/:id' render={(props) =>{
              let id = props.match.params.id
              let found_game = this.state.all_games.find(game => game.id == id)
              return <ShowGameContainer currentUser ={this.state.current_user} navButtons={this.navButtons}clickSaveGame={this.clickSaveGame} gameObj = {found_game}/>
            }}>
              
            </Route>
            {
              this.state.playing_game?
              <Redirect to= {`/games/${this.state.playing_game}`} /> :    
              <Route exact path='/games'>
                <AllGamesContainer gamesArray={this.state.all_games} handlePlayGame = {this.handlePlayGame}/>
              </Route>
            }

            <Route exact path ='/signup'>

            <SignupContainer handleOnChangeForm={this.handleOnChangeForm} handleSignupForm ={this.handleSignupForm}/>

            </Route>
            <Route exact path='/collection' render={()=>{
             return this.state.current_user ?             
              <CollectionContainer handlePlayGame = {this.handlePlayGame} collection={this.state.user_collection}/>:<Redirect to ='/login'/>
              }}>
            </Route>
            {
              this.state.current_user ?
              <Redirect to ='/collection'/>:
            <Route exact path ='/login'>
              <LoginContainer handleLoginForm ={this.handleLoginForm}handleOnChangeForm={this.handleOnChangeForm} />
            </Route>


            }




  
            



            <Route exact path='/'>
              <HomeContainer />
            </Route>


            
            <CreatorContainer />




          </Switch>
        </Router>:<img src='https://media1.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif '/>
  }
        </div>
    );
  }
}
 
export default App;

