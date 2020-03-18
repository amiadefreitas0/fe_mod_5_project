import React, { Component } from 'react';

class ReviewComponent extends Component {
    render() { 
        return ( 
            <tr className ="review-card">
                <td>{this.props.review.text}</td>
            </tr>
         );
    }
}
 
export default ReviewComponent;