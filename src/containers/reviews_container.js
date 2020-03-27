import React from 'react';
import ReviewComponent from '../components/review_component';
import ReviewFormComponent from '../components/review_form_component';
import { Redirect } from 'react-router-dom';

class ReviewContainer extends React.Component {

    state={

        
    }

  



    render() { 
        return (  
            <div>
                {
                    this.props.redirect?
                    <Redirect to ='/login'/>: null
                }
                <h3 className='header'> Reviews</h3>
                     <table>
                    {this.props.reviews && !this.props.reviews.length == 0?
                        this.props.reviews.map((review)=>{
                            return <ReviewComponent review ={review}/>
                            
                            
                        }) 
                        : <h4> Be the first to review this game</h4>
                        
                        
                        
                    }
                </table>
                    <div id = 'review 'onClick ={this.props.handleClickNewReview} class="ui  button" tabindex="0">
                            <div id = 'review 'onClick ={this.props.handleClickNewReview} class="visible content">
                            write a review!
                            </div>
                          
                    </div>
                    {this.props.reviewFormDisplay == true?
                    <ReviewFormComponent gameObj={this.props.gameObj}postAComment ={this.props.postAComment}/>: null
                    }
                  
                
            </div>
        );
    }
}
 
export default ReviewContainer;