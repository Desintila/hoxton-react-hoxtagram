import Comment from "./Comment"
import './CSS/Comments.css'

function Comments(props) {
    return (
        <ul className="comments">
            {
                props.post.comments.map(comment => (
                    <Comment comment={comment} key={comment.id} removeComment={props.removeComment} post={props.post} />
                ))
            }

        </ul>
    )
}
export default Comments