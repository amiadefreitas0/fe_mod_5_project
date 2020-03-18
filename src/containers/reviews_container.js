import React from 'react';
import ReviewComponent from '../components/review_component';
import ReviewFormComponent from '../components/review_form_component';
import { Redirect } from 'react-router-dom';

class ReviewContainer extends React.Component {

    state={
        redirect:false
        
    }

    handleClickNewReview=(event)=>{
        if (this.props.currentUser){
            console.log(this.props.reviewFormToggle)
           this.props.reviewFormToggle()

        }else{
            this.setState({
                redirect:true
            })



        }
       

    }



    render() { 
        console.log(this.props)
        return (  
            <div>
                {
                    this.state.redirect?
                    <Redirect to ='/login'/>: null
                }
                <h2> Reviews</h2>
                     <table>
                    {this.props.reviews && !this.props.reviews.length == 0?
                        this.props.reviews.map((review)=>{
                            return <ReviewComponent review ={review}/>
                            
                            
                        }) 
                        : <h4> Be the first to review this game</h4>
                        
                        
                        
                    }
                </table>
                    <button onClick={this.handleClickNewReview}> create a new review</button>

                    {this.props.reviewFormDisplay == true?
                    <ReviewFormComponent postAComment ={this.props.postAComment}/>: null
                    }
                
            </div>
        );
    }
}
 
export default ReviewContainer;