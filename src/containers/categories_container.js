import React, { Component } from 'react';
import CategoryButtonComponent from '../components/category_button_component';

class CategoriesContainer extends Component {

    render() { 
        return ( 
            <div>
               <div className ='category-header'> Categories </div>
                <CategoryButtonComponent handleCategoryButton={this.props.handleCategoryButton}/>
            </div>
         );
    }
}
 
export default CategoriesContainer;