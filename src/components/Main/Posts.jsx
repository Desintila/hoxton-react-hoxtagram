import Post from "./Post"
import './CSS/Posts.css'
import Form from "./Form"

function Posts(props) {

    return (

        <section className="image-container">
            <Form posts={props.posts} createPost={props.createPost} setPost={props.setPost} />
            {
                props.posts.map(post => (
                    <Post post={post} posts={props.posts} key={post.title} increaseLikes={props.increaseLikes} removeComment={props.removeComment} setPost={props.setPost} createComment={props.createComment} removePost={props.removePost} />

                ))
            }

        </section>
    )
}

export default Posts