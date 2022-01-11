import Comments from "./Comments"
import './CSS/Post.css'


function Post(props) {
    return (
        <article className="image-card">
            <button onClick={() => props.removePost(props.post)}>X</button>
            <h2 className="title">{props.post.title}</h2>

            <img src={props.post.image} className="image" />

            <div className="likes-section">
                <span className="likes">{props.post.likes} likes</span>
                <button className="like-button" onClick={() => props.increaseLikes(props.post)}>♥</button>
            </div>

            <Comments post={props.post} removeComment={props.removeComment} />



            <form className="comment-form" onSubmit={function (event) {
                event.preventDefault()
                const comment = event.target.comment.value
                props.createComment(comment, props.post.id).then(function (comment) {
                    const updateComments = ([...props.posts])
                    props.post.comments.push(comment)
                    props.setPost(updateComments)
                })
                event.target.reset()


            }} >

                <input
                    className="comment-input"
                    type="text"
                    name="comment"
                    placeholder="Add a comment..."
                />

                <button className="comment-button" type="submit">Post</button>

            </form>

        </article>
    )
}
export default Post