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



class App extends React.Component {
  state = {
    loading: true,
    all_games: [],
    playing_game: null
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

  render() { 
    return (  

      <div>
        {!this.state.loading?



        <Router>
          <Switch>

            <Route exact path ='/games/:id' render={(props) =>{
              let id = props.match.params.id
              let found_game = this.state.all_games.find(game => game.id == id)
              return <ShowGameContainer gameObj = {found_game}/>
            }}>
              
            </Route>
            {
              this.state.playing_game?
              <Redirect to= {`/games/${this.state.playing_game}`} /> :    
              <Route exact path='/games'>
                <AllGamesContainer gamesArray={this.state.all_games} handlePlayGame = {this.handlePlayGame}/>
              </Route>
            }

        


            <Route exact path='/'>
              <HomeContainer />
            </Route>


            <CollectionContainer />

            
            <CreatorContainer />
            <LoginContainer />
            <SignupContainer />


          </Switch>
        </Router>:<img src='https://media1.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif '/>
  }
        </div>
    );
  }
}
 
export default App;

