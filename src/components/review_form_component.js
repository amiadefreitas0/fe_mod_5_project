import React, { Component } from 'react';
import { Button,  Form } from 'semantic-ui-react'
class ReviewFormComponent extends Component {

    state={
        reviewValue: null
    }
   
    render() { 
        return ( 
            // <Form onSubmit ={(event)=>{
            //     let review = this.state.reviewValue
            //     this.props.postAComment(event,review)}}>
            //     <Form.Field>
            //         <label>Review</label>
            //         <input onChange={(event)=>{
            
            //             let review = event.target.value
            //             this.setState({
            //                 reviewValue: review
            //             })
            //         }} placeholder='Review' />
            //     </Form.Field>
                
            //     <Button type='submit'>Submit</Button>
            // </Form>
             <form onSubmit ={(event,gameObj = this.props.gameObj)=>{
                 event.preventDefault()
                let review = this.state.reviewValue
                this.props.postAComment(event,review,gameObj)}} class="ui form">
             <div class="field">
             <input placeholder="Type here..." id='username' onChange ={(event)=>{ 
                
                 let review = event.target.value
                 this.setState({
                        
                          reviewValue: review
                        })}}/>
             </div>
             
             
             <button type="submit" class="ui button">Submit</button>
             </form>
         );
    }
}
 
export default ReviewFormComponent;