import Post from "./Post"
import './CSS/Posts.css'

function Posts(props) {

    return (

        <section className="image-container">
            {
                props.posts.map(post => (

                    <Post post={post} key={post.title} />

                ))
            }

        </section>
    )
}

export default Posts