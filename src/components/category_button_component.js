import React, { Component } from 'react';

class CategoryButtonComponent extends Component {

    render() { 
        return (
        <div>
            <button id = 'action'onClick ={this.props.handleCategoryButton}> ACTION </button>
            <button id = 'basketball'onClick ={this.props.handleCategoryButton}> BASKETBALL </button>
            <button id = 'racing'onClick ={this.props.handleCategoryButton}> RACING </button>
            <button id = 'driving'onClick ={this.props.handleCategoryButton}> DRIVING </button>
            <button id = 'arcade'onClick ={this.props.handleCategoryButton}> ARCADE </button>
            <button id = 'shooting'onClick ={this.props.handleCategoryButton}> SHOOTING </button>
            <button id = 'adventure'onClick ={this.props.handleCategoryButton}> ADVENTURE </button>
            <button id = 'puzzle'onClick ={this.props.handleCategoryButton}> PUZZLE </button>



        </div> );
    }
}
 
export default CategoryButtonComponent;