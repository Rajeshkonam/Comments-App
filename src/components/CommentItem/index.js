import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {details, toggleLikeBtn, toggleDelBtn} = props
  const {initialClassName, name, date, comment, isLiked, id} = details
  const initial = name ? name[0].toUpperCase() : ''
  const likeBtnClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedDate = formatDistanceToNow(date)

  const likeBtn = () => {
    toggleLikeBtn(id)
  }
  const delBtn = () => {
    toggleDelBtn(id)
  }
  return (
    <li className="l1">
      <div className="d5">
        <div className={`${initialClassName} d6`}>
          <p>{initial}</p>
        </div>
        <p className="p2">{name}</p>
        <p className="p3">{postedDate}</p>
      </div>
      <p className="p4">{comment}</p>
      <div className="d7">
        <div>
          <button
            type="button"
            onClick={likeBtn}
            className={`${likeBtnClassName} btn2`}
          >
            <img src={likeImageUrl} alt="img" className="img2" />{' '}
            <span>Like</span>
          </button>
        </div>

        <button type="button" onClick={delBtn} className="delBtn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="img"
            className="img4"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
