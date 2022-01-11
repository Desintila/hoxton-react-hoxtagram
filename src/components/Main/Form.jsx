
function Form(props) {
    return (<form className="comment-form image-card" onSubmit={(event) => {
        event.preventDefault()

        const title = event.target.title.value
        const image = event.target.image.value

        props.createPost(title, image).then(function (post) {
            const updatePost = JSON.parse(JSON.stringify(props.posts))
            post.comments = []
            updatePost.push(post)
            props.setPost(updatePost)
        })

        event.target.reset()
    }}>
        <h2 className="title">New Post</h2>
        <input
            className="comment-input"
            type="text"
            name="title"
            id="title"
            placeholder="Add a title..."
        />
        <input
            className="comment-input"
            type="url"
            name="image"
            id="image"
            placeholder="Add an image url..."
        />
        <button className="comment-button" type="submit">Post</button>
    </form>)
}
export default Form