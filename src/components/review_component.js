import React, { Component } from 'react';

class ReviewComponent extends Component {
    render() { 
        debugger
        return ( 
            <tr className ="review-card">
                <td>{this.props.review.user? this.props.review.user.username:null}: </td>
                <td>{this.props.review.text}</td>
            </tr>
         );
    }
}
 
export default ReviewComponent;