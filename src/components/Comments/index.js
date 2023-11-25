import {Component} from 'react'

import {v4} from 'uuid'

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
  state = {nameInput: '', commentInput: '', commentsList: []}

  renderCommentsList = () => {
    const {commentsList} = this.state
    return commentsList.map(i => (
      <CommentItem
        details={i}
        key={i.id}
        toggleLikeBtn={this.toggleLikeBtn}
        toggleDelBtn={this.toggleDelBtn}
      />
    ))
  }

  onAddComments = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialContainerBackgroundClassName = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      initialClassName: initialContainerBackgroundClassName,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  toggleLikeBtn = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(i => {
        if (id === i.id) {
          return {...i, isLiked: !i.isLiked}
        }
        return i
      }),
    }))
  }

  toggleDelBtn = id => {
    const {commentsList} = this.state
    this.setState({commentsList: commentsList.filter(i => id !== i.id)})
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state
    return (
      <div className="d1">
        <div className="d8">
          <h1>Comments</h1>
        </div>
        <div className="d3">
          <div>
            <form onSubmit={this.onAddComments} className="d2">
              <p className="p4">say something about 4.0 technologies</p>
              <input
                type="text"
                onChange={this.onChangeNameInput}
                value={nameInput}
                className="input1"
                placeholder="Your Name"
              />
              <textarea
                onChange={this.onChangeCommentInput}
                rows="6"
                value={commentInput}
                className="textarea1"
                placeholder="Your Comment"
              />
              <button type="submit" className="btn1">
                Add Comment
              </button>
            </form>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="img"
          />
        </div>
        <hr className="hr1" />
        <div className="d4">
          <div className="d9">
            <p className="p1">{commentsList.length}</p>
          </div>
          <p>Comments</p>
        </div>
        {this.renderCommentsList()}
      </div>
    )
  }
}
export default Comments
