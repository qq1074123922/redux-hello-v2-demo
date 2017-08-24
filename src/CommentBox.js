import React, { Component } from 'react'
import './comment-box.css'
import store from './redux/store'
import { connect } from 'react-redux'
 class CommentBox extends Component {

   handleSubmit = (e) => {
     e.preventDefault()
     let comment = this.commentInput.value
     store.dispatch({ type: 'ADD_COMMENT', comment })
     this.commentInput.value = ''
     console.log('handleSubmit', store.getState())
   }

   render(){
     console.log("reducer   "+store.getState());
     let commentList = this.props.comments.slice().reverse().map((item, i) => (
       <li key={i}>{item}</li>
     ))
     let commentForm = (
       <form onSubmit={this.handleSubmit}>
         <input type="text" ref={value => this.commentInput = value} />
         <button type="submit">提交</button>
       </form>
     )
     return(
       <div className="comment-box">
         <div className="form">
          {commentForm}
        </div>
        <ul className="comment-list">
          {commentList}
        </ul>
       </div>
     )
   }
 }
const mapStateToProps = (state) => ({
  comments: state
})
export default connect(mapStateToProps)(CommentBox)
