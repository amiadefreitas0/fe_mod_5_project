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
  constructor(props) {
    super(props);
      this.state = {
        current_user:null,
        loading: true,
        all_games: [],
        playing_gameObj:null,
        playing_gameId: null,
        name:null,
        username:null,
        password:null,
        user_collection:null,
        category:null,
        category_games:null,
        go_home: false
      }
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
      

      fetch(`http://localhost:3000/games/${gameId}`)
      .then(r => r.json())
      .then(data=>{
        this.setState({
          playing_gameObj:data,
          playing_gameId: gameId
        })
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
      
      fetch(`http://localhost:3000/collections/${this.state.current_user.id}`)
      .then(r=> r.json())
      .then(resp =>{
        this.setState({
          user_collection: resp
        })
      })

    }
    handleCategoryButton =(e)=>{
      let name = e.target.id
      this.setState({category: name})
      fetch(`http://localhost:3000/${name}`)
      .then(r=>r.json())
      .then(data => this.setState({category_games: data}))
      
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
            current_user: r,
            go_home: true
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
          
          fetch(`http://localhost:3000/games/${r.game_id}`)
          .then(r=>r.json())
          .then(resp =>{
            
            this.setState({
              user_collection:[...this.state.user_collection, resp]
            })
          })
      })

      }

    }

    navButtons=(event)=>{
      debugger
      if (event.target.id == 'all-games-btn'){

        this.setState({
          playing_gameId:null,
          playing_gameObj: null,
          category_games:null,
          go_home: true,
          go_collection: false
        })

      }else{
        this.setState({
          playing_gameId:null,
          playing_gameObj: null,
          category_games:null,
          go_home: false,
          go_collection: true
        })
      }

    }

    unsaveGame =(e, user, gameId)=>{
      fetch(`http://localhost:3000/collections/${user.id}/${gameId}`,{
        method:  `DELETE`
      })
      .then(console.log('done'))
      let new_array = this.state.user_collection.filter((collection)=>{
       
        return collection.id !== gameId 
      })
      this.setState({
        user_collection: new_array
      })
      
      // collection / user id

    }
    
    logoutbtn = ()=>{
      this.setState({
        current_user: null
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
              let found_game = this.state.playing_gameObj
              
             
              return <ShowGameContainer go_home ={this.state.go_home} logoutbtn ={this.logoutbtn} currentUser ={this.state.current_user} navButtons={this.navButtons}clickSaveGame={this.clickSaveGame} gameObj = {found_game}/>
            }}>
              
            </Route>
            {
              this.state.playing_gameId && this.state.playing_gameObj?
              <Redirect to= {`/games/${this.state.playing_gameId}`} /> :    
              <Route exact path='/games'>
                {
                  !this.state.category_games ?
                  <AllGamesContainer logoutbtn ={this.logoutbtn} currentuser ={this.state.current_user}handleCategoryButton={this.handleCategoryButton} gamesArray={this.state.all_games} handlePlayGame = {this.handlePlayGame}/>:
                  <AllGamesContainer logoutbtn ={this.logoutbtn} currentuser ={this.state.current_user}handleCategoryButton={this.handleCategoryButton} navButtons = {this.navButtons}gamesArray={this.state.category_games} category ={this.state.category} handlePlayGame = {this.handlePlayGame}/>
             }
              </Route>
            }
             <Route exact path = '/'>
              <Redirect to ='/games'/>
            </Route>
    {       !this.state.current_user?
            <Route exact path ='/signup'>
              
              <SignupContainer handleOnChangeForm={this.handleOnChangeForm} handleSignupForm ={this.handleSignupForm}/>
                
            </Route>: null
          }

            <Route exact path='/collection' render={()=>{
             return this.state.current_user ?             
              <CollectionContainer  logoutbtn ={this.logoutbtn} unsavegame = {this.unsaveGame} currentUser ={this.state.current_user}handlePlayGame = {this.handlePlayGame} collection={this.state.user_collection}/> : <Redirect to ='/login'/>
              }}>
            </Route>
            {
              this.state.current_user ?
              <Redirect to ='/collection'/>:
            <Route exact path ='/login'>
              <LoginContainer handleLoginForm ={this.handleLoginForm}handleOnChangeForm={this.handleOnChangeForm} />
            </Route>


            }
               {
                     this.state.go_home?
                     <Redirect to= '/games'/>:null
                   }
                   {
                     this.state.go_collection?
                     <Redirect to= '/collection'/>:null
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

