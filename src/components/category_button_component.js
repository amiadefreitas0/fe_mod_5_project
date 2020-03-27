import React, { Component } from 'react';


class CategoryButtonComponent extends Component {

    render() { 
        return (
        <div>
         
        
          
            <div id = 'arcade'onClick ={this.props.handleCategoryButton} class="ui animated button" tabindex="0">
                            <div id = 'arcade'onClick ={this.props.handleCategoryButton} class="visible content">
                             Arcade
                            </div>
                            <div id = 'arcade'onClick ={this.props.handleCategoryButton} class="hidden content">
                                <i class="gamepad icon"></i>
                            </div>
            </div>
             {/* action button  */}
            <div id = 'action'onClick ={this.props.handleCategoryButton} class="ui animated button" tabindex="0">
                            <div id = 'action'onClick ={this.props.handleCategoryButton} class="visible content">
                             Action
                            </div>
                            <div id = 'action'onClick ={this.props.handleCategoryButton} class="hidden content">
                                <i class="fas fa-user-ninja"></i>

                            </div>
            </div>
            {/* adventure button  */}
            <div id = 'adventure'onClick ={this.props.handleCategoryButton} class="ui animated button" tabindex="0">
                            <div id = 'adventure'onClick ={this.props.handleCategoryButton} class="visible content">
                             Adventure
                            </div>
                            <div id = 'adventure'onClick ={this.props.handleCategoryButton} class="hidden content">
                            <i class="grav icon"></i>                            </div>
            </div>

            {/* driving button */}
            <div id = 'driving'onClick ={this.props.handleCategoryButton} class="ui animated button" tabindex="0">
                            <div id = 'driving'onClick ={this.props.handleCategoryButton} class="visible content">
                             Driving
                            </div>
                            <div id = 'driving'onClick ={this.props.handleCategoryButton} class="hidden content">
                                <i class="car icon"></i>
                            </div>
            </div>
        {/* puzzle button  */}
            <div id = 'puzzle'onClick ={this.props.handleCategoryButton} class="ui animated button" tabindex="0">
                            <div id = 'puzzle'onClick ={this.props.handleCategoryButton} class="visible content">
                             Puzzle
                            </div>
                            <div id = 'puzzle'onClick ={this.props.handleCategoryButton} class="hidden content">
                                <i class="chess board icon"></i>
                            </div>
            </div>
                {/* racing button */}
            <div id = 'racing'onClick ={this.props.handleCategoryButton} class="ui animated button" tabindex="0">
                            <div id = 'racing'onClick ={this.props.handleCategoryButton} class="visible content">
                             Racing
                            </div>
                            <div id = 'racing'onClick ={this.props.handleCategoryButton} class="hidden content">
                                <i class="motorcycle icon"></i>
                            </div>
            </div>
            {/* shooting button */}
            <div id = 'shooting'onClick ={this.props.handleCategoryButton} class="ui animated button" tabindex="0">
                            <div id = 'shooting'onClick ={this.props.handleCategoryButton} class="visible content">
                             Shooting
                            </div>
                            <div id = 'shooting'onClick ={this.props.handleCategoryButton} class="hidden content">
                                <i class="crosshairs icon"></i>
                            </div>
            </div>
            {/* basketball */}
            <div id = 'basketball'onClick ={this.props.handleCategoryButton} class="ui animated button" tabindex="0">
                            <div id = 'basketball'onClick ={this.props.handleCategoryButton} class="visible content">
                             Basketball
                            </div>
                            <div id = 'basketball'onClick ={this.props.handleCategoryButton} class="hidden content">
                                <i class="basketball ball icon"></i>
                            </div>
            </div>
           


        </div> );
    }
}
 
export default CategoryButtonComponent;