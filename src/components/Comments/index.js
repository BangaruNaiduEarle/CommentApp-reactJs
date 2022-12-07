/* eslint-disable react/self-closing-comp */
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {name: '', userComment: '', commentsList: []}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeText = event => {
    this.setState({userComment: event.target.value})
  }

  addComment = event => {
    const now = new Date()
    event.preventDefault()
    const {name, userComment} = this.state
    const colors = initialContainerBackgroundClassNames

    const index = Math.ceil(Math.random() * colors.length) - 1
    const randomColor = colors[index]

    const newComment = {
      name,
      userComment,
      id: uuidv4(),
      isLiked: false,
      date: now,
      color: randomColor,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      userComment: '',
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state

    const filteredCommentsList = commentsList.filter(each => each.id !== id)

    this.setState({commentsList: filteredCommentsList})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {name, userComment, commentsList} = this.state
    const count = commentsList.length

    console.log(commentsList)
    return (
      <div className="mainBgContainer">
        <h1 className="heading">Comments</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
          className="commentImage"
        />
        <form className="form-container" onSubmit={this.addComment}>
          <p className="para">say something about 4.0 Technologies</p>
          <input
            type="text"
            value={name}
            className="InputEle"
            placeholder="Your Name"
            onChange={this.onChangeName}
          />

          <textarea
            type="text"
            rows="5"
            cols="8"
            value={userComment}
            placeholder="Your Comment"
            className="TextEle"
            onChange={this.onChangeText}
          ></textarea>
          <div>
            <button type="submit" className="addCommentBtn">
              Add Comment
            </button>
          </div>
        </form>
        <p className="comment">
          <span className="Count">{count}</span>Comments
        </p>
        <ul className="UnOrderList">
          {commentsList.map(each => (
            <CommentItem
              each={each}
              key={each.id}
              onDelete={this.onDeleteComment}
              toggleIsLiked={this.toggleIsLiked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
