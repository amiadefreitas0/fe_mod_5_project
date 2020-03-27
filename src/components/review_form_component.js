import React, { Component } from 'react';
import { Button,  Form } from 'semantic-ui-react'
class ReviewFormComponent extends Component {

    state={
        reviewValue: null
    }
   
    render() { 
        return ( 
            <Form onSubmit ={(event)=>{
                let review = this.state.reviewValue
                this.props.postAComment(event,review)}}>
                <Form.Field>
                    <label>Review</label>
                    <input onChange={(event)=>{
            
                        let review = event.target.value
                        this.setState({
                            reviewValue: review
                        })
                    }} placeholder='Review' />
                </Form.Field>
                
                <Button type='submit'>Submit</Button>
            </Form>
         );
    }
}
 
export default ReviewFormComponent;