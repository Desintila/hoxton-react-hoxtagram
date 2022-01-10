import Post from "./Post"
import './CSS/Posts.css'

function Posts(props) {

    return (

        <section className="image-container">
            {
                props.posts.map(post => (

                    <Post post={post} key={post.title} increaseLikes={props.increaseLikes} removeComment={props.removeComment} />

                ))
            }

        </section>
    )
}

export default Posts