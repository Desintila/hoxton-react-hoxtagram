import Comments from "./Comments"
import './CSS/Post.css'

function Post(props) {
    return (

        <article className="image-card">

            <h2 className="title">{props.post.title}</h2>

            <img src={props.post.image} className="image" />

            <div className="likes-section">
                <span className="likes">{props.post.likes} likes</span>
                <button className="like-button">♥</button>
            </div>

            <Comments post={props.post} />

        </article>
    )
}
export default Post