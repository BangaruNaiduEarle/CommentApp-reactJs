// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {each, toggleIsLiked, onDelete} = props
  const {id, name, userComment, isLiked, date, color} = each

  const deleteComment = () => {
    onDelete(id)
  }

  const onClickToggle = () => {
    toggleIsLiked(id)
  }

  const postedAt = formatDistanceToNow(date)
  const toggleLike = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const classBtn = isLiked ? 'liked' : ''
  return (
    <li className="listStyle">
      <div className="InitialNameContainer">
        <div className={`initial ${color}`}>{name[0].toUpperCase()}</div>

        <div className="nameCommentContainer">
          <div className="nameTimeContainer">
            <h1 className="name">{name}</h1>
            <p className="time">{postedAt} ago</p>
          </div>
          <p>{userComment}</p>
        </div>
      </div>

      <div className="buttonsContainer">
        <div className="likeContainer">
          <button type="button" className="LikeButton" onClick={onClickToggle}>
            <img src={toggleLike} alt="like" className="likeImg" />
          </button>
          <p className={`like ${classBtn}`}>Like</p>
        </div>

        <button type="button" className="deleteButton" onClick={deleteComment}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
