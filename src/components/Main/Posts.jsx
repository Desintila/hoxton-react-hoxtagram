import Post from "./Post"
import './CSS/Posts.css'

function Posts(props) {

    return (

        <section className="image-container">
            {
                props.posts.map(post => (

                    <Post post={post} posts={props.posts} key={post.title} increaseLikes={props.increaseLikes} removeComment={props.removeComment} setPost={props.setPost} createComment={props.createComment} />

                ))
            }

        </section>
    )
}

export default Posts