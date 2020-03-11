import React from 'react';


class ShowGameContainer extends React.Component {
  
    render() {
        
        return (

            <div className = 'show-game'>
                
                    
                    <div className ='game-name'>{this.props.gameObj.title}</div> 
                    <iframe src={this.props.gameObj.game_src} width="800" height="600" scrolling="none" frameborder="0"></iframe>
                    <div className ='game-description'>{this.props.gameObj.description}</div> 
                
                    

            </div> 


         )
    }
}
 
export default ShowGameContainer;