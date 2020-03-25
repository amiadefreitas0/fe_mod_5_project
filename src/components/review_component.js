import React, { Component } from 'react';

class ReviewComponent extends Component {
    render() { 
        debugger
        return ( 
            <tr className ="review-card">
        <td>{this.props.review.user.username}: </td>
                <td>{this.props.review.text}</td>
            </tr>
         );
    }
}
 
export default ReviewComponent;